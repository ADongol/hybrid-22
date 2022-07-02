/// <reference path="../../DCScreen.ts" />
/// <reference path="DCLibraryHotspot.ts" />
module daikincity.ui.application.library
{
    import lib = daikincity.building.library;

    export class DCLibraryMenu extends DCScreen
    {
        private libraryCore: lib.DCLibraryCore;
        private categoryHotspots: Array<DCLibraryHotspot>;
        private libraryApplication: DCLibraryApplication;

        constructor(libraryApplication:DCLibraryApplication)
        {
            super(document.getElementById("libraryMenu"));
            this.libraryApplication = libraryApplication;

            this.libraryCore = lib.DCLibraryCore.I;
            this.categoryHotspots = [];
        }

        public populate(): void
        {
            var columnPositions: Array<number> = [5.5, 29.8, 58.5, 82.75];
            var i: number;
            var c: number = 0;

            for (i = 0; i < this.libraryCore.rootDirectory.numDirectories; i++)
            {
                var directory: lib.DCLibraryDirectory = this.libraryCore.rootDirectory.getDirectoryAt(i);
                if (!this.libraryCore.authenticated && directory.isProtected) continue;

                var hotspot: DCLibraryHotspot = new DCLibraryHotspot(directory);
                hotspot.element.style.left = columnPositions[Math.floor(c % columnPositions.length)] + "%";
                hotspot.element.style.top = 42 + (Math.floor(c / columnPositions.length) * 13) + "%";
                $(hotspot.element).on("click touchend", $.proxy(this.onHotspotSelected, this));
                this.screenElement.appendChild(hotspot.element);

                c++;
            }
        }

        private onHotspotSelected(e: MouseEvent): void
        {
            e.preventDefault();
            var element: HTMLElement = <HTMLElement> e.currentTarget;
            this.libraryApplication.showDirectory(this.libraryCore.rootDirectory.getDirectoryById(parseInt(element.id)));
        }
    }
} 