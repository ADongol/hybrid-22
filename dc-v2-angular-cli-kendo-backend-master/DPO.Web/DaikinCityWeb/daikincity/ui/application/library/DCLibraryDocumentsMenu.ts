/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.library
{
    export class DCLibraryDocumentsMenu extends DCScreen
    {
        private static LIBRARY_TAB_CLASS: string = "library-tab-btn";
        private static LIBRARY_TAB_HIGHLIGHT_CLASS: string = "library-tab-btn-highlight";

        private libraryApplication: DCLibraryApplication;
        private libraryCore: daikincity.building.library.DCLibraryCore;

        private booksContainerElement: HTMLDivElement;
        private tabsMenuElement: HTMLDivElement;
        private directoryTitleElement: HTMLDivElement;
        private breadCrumbsElement: HTMLDivElement;
        private shelvesWrapperElement: HTMLDivElement;
        private shelvesContainerElement: HTMLDivElement;
        private currentDirectory: daikincity.building.library.DCLibraryDirectory = null;
        private books: Array<IDCLibraryBook>;
        private tabBtns: Array<HTMLButtonElement>;
        private targetY: number = 0;
        private speedY: number = 0;
        private dragging: boolean = false;
        private touchY: number = 0;
        private touchPrevY: number = 0;

        constructor(libraryApplication: DCLibraryApplication)
        {
            super(document.getElementById("libraryDocumentsMenu"));

            this.libraryApplication = libraryApplication;
            this.booksContainerElement = <HTMLDivElement> document.getElementById("booksContainer");
            this.tabsMenuElement = <HTMLDivElement> document.getElementById("libraryTabsMenu");
            this.directoryTitleElement = <HTMLDivElement> document.getElementById("libraryDirectoryTitle");
            this.breadCrumbsElement = <HTMLDivElement> document.getElementById("libraryBreadcrumbs");
            this.shelvesContainerElement = <HTMLDivElement> document.getElementById("libraryShelves");
            this.shelvesWrapperElement = <HTMLDivElement> document.getElementById("libraryShelvesWrapper");

            this.libraryCore = daikincity.building.library.DCLibraryCore.I;
            this.books = [];
        }

        public show(): void
        {
            if (this.tabsMenuElement.innerHTML.length == 0)
            {
                this.createTabs();
            }
            super.show();

            if (daikincity.DCCore.I.isDevice)
            {
                this.shelvesWrapperElement.addEventListener("touchstart", (e) => this.onScrollStart(e));
                this.shelvesWrapperElement.addEventListener("touchmove", (e) => this.onScrollMove(e));
                this.shelvesWrapperElement.addEventListener("touchend", (e) => this.onScrollEnd(e));
                requestAnimationFrame(() => this.updateScroll());
            }
        }

        private onScrollStart(e: any): void
        {
            this.touchY = this.touchPrevY = e.touches[0].pageY;
            this.dragging = true;
        }

        private onScrollMove(e: any): void
        {
            this.touchY = e.touches[0].pageY;
        }

        private onScrollEnd(e: any): void
        {
            this.dragging = false;
        }

        private updateScroll(): void
        {
            if (this.libraryApplication.visible)
            {
                if (this.dragging)
                {
                    this.speedY += (this.touchPrevY - this.touchY) * 0.125;
                    this.touchPrevY = this.touchY;
                }

                this.targetY += this.speedY;

                if (this.targetY < 0)
                {
                    this.targetY = 0;
                    this.speedY = 0;
                }
                else if (this.targetY > this.shelvesWrapperElement.scrollHeight - 400)
                {
                    this.targetY = this.shelvesWrapperElement.scrollHeight - 400;
                    this.speedY = 0;
                }

                this.speedY *= 0.96;
                this.shelvesWrapperElement.scrollTop += (this.targetY - this.shelvesWrapperElement.scrollTop) / 6;

                requestAnimationFrame(() => this.updateScroll());
            }
        }

        public showDirectory(directory: daikincity.building.library.DCLibraryDirectory): void
        {
            this.shelvesWrapperElement.scrollTop = 0;
            this.targetY = 0;
            this.speedY = 0;
            this.touchPrevY = this.touchY = 0;
            this.currentDirectory = directory;
            this.highlightTab();
            this.createBreadcrumbs();
            this.directoryTitleElement.innerHTML = this.currentDirectory.name;
            this.createBooks();
        }

        private createBreadcrumbs(): void
        {
            this.breadCrumbsElement.innerHTML = "<p>" + this.currentDirectory.name + "</p>";

            var parentDirectory: daikincity.building.library.DCLibraryDirectory = this.currentDirectory.parentDirectory;

            while (parentDirectory != null)
            {
                var btn: HTMLButtonElement = document.createElement("button");
                btn.innerHTML = "<span>" + parentDirectory.name + " > </span>";
                btn.id = parentDirectory.id.toString();
                $(btn).addClass("library-breadcrumb-btn");
                btn.onclick = (e) => this.onDirectorySelected(e);
                this.breadCrumbsElement.insertBefore(btn, this.breadCrumbsElement.firstChild);
                parentDirectory = parentDirectory.parentDirectory;
            }
        }

        private createBooks(): void
        {
            if (this.currentDirectory == null) return;
            this.clear();

            var i: number, c: number = 0, book: IDCLibraryBook, shelfElement: HTMLDivElement;
            var numShelves: number = 0;

            // directories
            for (i = 0; i < this.currentDirectory.numDirectories; i++)
            {
                var dir: daikincity.building.library.DCLibraryDirectory = this.currentDirectory.getDirectoryAt(i);
                if (!this.libraryCore.authenticated == true && dir.isProtected) continue;
                if (dir.numDirectories + dir.numDocuments > 0)
                {
                    if (c++ % 5 == 0)
                    {
                        shelfElement = this.createShelf();
                        this.shelvesContainerElement.appendChild(shelfElement);
                        numShelves++;
                    }

                    book = new DCLibraryBookDirectory(dir);
                    shelfElement.appendChild(book.element);
                    book.element.onclick = (e) => this.onDirectorySelected(e);
                    this.books.push(book);
                }
            }

            // documents
            for (i = 0; i < this.currentDirectory.numDocuments; i++)
            {
                if (c++ % 5 == 0)
                {
                    shelfElement = this.createShelf();
                    this.shelvesContainerElement.appendChild(shelfElement);
                    numShelves++;
                }

                book = new DCLibraryBookDocument(this.currentDirectory.getDocumentAt(i));
                shelfElement.appendChild(book.element);
                this.books.push(book);
            }

            // fill blank space with empty shelves
            if (numShelves < 3)
            {
                while (3 - numShelves++)
                {
                    shelfElement = this.createShelf();
                    this.shelvesContainerElement.appendChild(shelfElement);
                }
            }
        }

        private createShelf(): HTMLDivElement
        {
            var shelf: HTMLDivElement = document.createElement("div");
            $(shelf).addClass("library-shelf");

            var img: HTMLImageElement = document.createElement("img");
            img.src = "daikincityweb/images/buildings/library/library-shelf.jpg";
            shelf.appendChild(img);

            return shelf;
        }

        private createTabs(): void
        {
            this.tabBtns = [];

            var w: number = 100 / (this.libraryCore.rootDirectory.numDirectories + 1);

            var directory: daikincity.building.library.DCLibraryDirectory;
            for (var i: number = -1; i < this.libraryCore.rootDirectory.numDirectories; i++)
            {
                if (i == -1)
                {
                    directory = this.libraryCore.rootDirectory;
                }
                else
                {
                    directory = this.libraryCore.rootDirectory.getDirectoryAt(i);
                }

                if (!this.libraryCore.authenticated && directory.isProtected) continue;

                var tabBtn: HTMLButtonElement = document.createElement("button");

                tabBtn.style.width = w+"%";

                if (i == this.libraryCore.rootDirectory.numDirectories - 1)
                {
                    tabBtn.style.width = "-webkit-calc(" + w + "% - " + ((this.libraryCore.rootDirectory.numDirectories + 1) * 2) + "px)";
                    tabBtn.style.width = "calc(" + w + "% - " + ((this.libraryCore.rootDirectory.numDirectories + 1) * 2) + "px)";
                    tabBtn.style.marginRight = "0"; // ipad fix
                }

                tabBtn.id = directory.id.toString();
                $(tabBtn).addClass(DCLibraryDocumentsMenu.LIBRARY_TAB_CLASS);
                tabBtn.innerHTML = "<span>" + directory.name + "</span>";
                $(tabBtn).on("click touchend", $.proxy(this.onDirectorySelected, this));
                this.tabsMenuElement.appendChild(tabBtn);
                this.tabBtns.push(tabBtn);
            }
        }

        private highlightTab(): void
        {
            var highlight: boolean = false, id:number;
            for (var i: number = 0; i < this.tabBtns.length; i++)
            {
                var tabBtn: HTMLButtonElement = this.tabBtns[i];
                id = parseInt(tabBtn.id);
                highlight = this.libraryCore.hasParent(this.currentDirectory, this.libraryCore.directoriesDict[id], true);
                if (highlight == true)
                {
                    
                    if (!$(tabBtn).hasClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS))
                    {
                        $(tabBtn).addClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS);
                    }
                }
                else
                {
                    $(tabBtn).removeClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS);
                }
            }
        }

        private onDirectorySelected(e: MouseEvent): void
        {
            var element: HTMLDivElement = <HTMLDivElement> e.currentTarget;
            var id: number = parseInt(element.id);

            if (id == 1) // send root to menu screen
            {
                this.libraryApplication.setState(DCLibraryApplication.STATE_MENU);
            }
            else
            {
                this.showDirectory(this.libraryCore.directoriesDict[id]);
            }
        }

        public clear(): void
        {
            while (this.shelvesContainerElement.children.length)
            {
                this.shelvesContainerElement.removeChild(this.shelvesContainerElement.firstChild);
            }
        }
    }
} 