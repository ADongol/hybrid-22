module daikincity.ui.application.library
{
    import library = daikincity.building.library;

    export class DCLibraryHotspot
    {
        public directory: library.DCLibraryDirectory;
        public element: HTMLButtonElement;

        constructor(directory: library.DCLibraryDirectory)
        {
            this.directory = directory;

            this.element = document.createElement("button");
            this.element.id = this.directory.id.toString();
            $(this.element).addClass("category-hotspot");

            var span: HTMLSpanElement = document.createElement("span");
            span.innerHTML = this.directory.name;
            this.element.appendChild(span);
        }
    }
} 