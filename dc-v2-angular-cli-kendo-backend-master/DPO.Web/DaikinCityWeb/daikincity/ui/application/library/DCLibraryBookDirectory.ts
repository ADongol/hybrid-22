module daikincity.ui.application.library
{
    export class DCLibraryBookDirectory implements IDCLibraryBook
    {
        public directory: daikincity.building.library.DCLibraryDirectory;
        public element: HTMLButtonElement;

        constructor(directory: daikincity.building.library.DCLibraryDirectory)
        {
            this.directory = directory;
            this.element = document.createElement("button");
            this.element.id = this.directory.id.toString();
            $(this.element).addClass("book");
            $(this.element).addClass("book-directory");

            var img: HTMLImageElement = document.createElement("img");
            img.src = "daikincityweb/images/buildings/library/library-directory.png";
            this.element.appendChild(img);

            var numChildrenElement: HTMLParagraphElement = document.createElement("p");
            $(numChildrenElement).addClass("library-num-children");
            numChildrenElement.innerHTML = (directory.numDirectories + directory.numDocuments).toString() + " items";
            this.element.appendChild(numChildrenElement);

            var titleElement: HTMLParagraphElement = document.createElement("p");
            $(titleElement).addClass("library-directory-title");
            titleElement.innerHTML = directory.name;
            this.element.appendChild(titleElement);
        }
    }
}