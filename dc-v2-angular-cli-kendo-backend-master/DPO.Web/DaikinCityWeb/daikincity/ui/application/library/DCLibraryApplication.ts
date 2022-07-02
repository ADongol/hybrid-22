/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.library
{
    export class DCLibraryApplication extends DCScreen
    {
        public static STATE_MENU: string = "menu";
        public static STATE_DOCUMENTS_MENU: string = "documentsMenu";
        private state: string;

        private libraryCore: daikincity.building.library.DCLibraryCore;
        private menuClass: string = "library-menu";

        private menu: DCLibraryMenu;
        private documentsMenu: DCLibraryDocumentsMenu;

        constructor()
        {
            super(document.getElementById("libraryApplication"));

            this.menu = new DCLibraryMenu(this);

            this.documentsMenu = new DCLibraryDocumentsMenu(this);
            this.documentsMenu.hide();

            this.setState(DCLibraryApplication.STATE_MENU);

            this.libraryCore = daikincity.building.library.DCLibraryCore.I;
        }

        public show(): void
        {
            $(this.screenElement).addClass(this.menuClass);
            $(this.screenElement).hide();
            $(this.screenElement).fadeIn(500);

            if (!this.libraryCore.loaded)
            {
                this.libraryCore.addEventListener(daikincity.events.DCEvent.LIBRARY_READY, this.onLibraryReady, this);
                this.libraryCore.load();
            }
            else
            {
                this.showLibrary();
            }

            super.show();
        }

        private onLibraryReady(e: daikincity.events.DCEvent): void
        {
            this.libraryCore.removeEventListener(daikincity.events.DCEvent.LIBRARY_READY, this.onLibraryReady, this);

            this.menu.populate();
            this.showLibrary();
        }

        private showLibrary(): void
        {
            this.setState(DCLibraryApplication.STATE_MENU);
        }

        public setState(toState: string): void
        {
            this.state = toState;

            this.menu.hide();
            this.documentsMenu.hide();

            switch (this.state)
            {
                case DCLibraryApplication.STATE_MENU:
                    this.menu.show();
                    break;
                case DCLibraryApplication.STATE_DOCUMENTS_MENU:
                    this.documentsMenu.show();
                    break;
            }
        }

        public showDirectory(directory: daikincity.building.library.DCLibraryDirectory): void
        {
            this.setState(DCLibraryApplication.STATE_DOCUMENTS_MENU);
            this.documentsMenu.showDirectory(directory);
        }
    }
} 