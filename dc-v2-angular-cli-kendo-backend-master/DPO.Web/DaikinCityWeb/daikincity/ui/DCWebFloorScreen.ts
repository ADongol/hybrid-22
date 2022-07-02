module daikincity.ui
{
    export class DCWebFloorScreen extends daikincity.ui.DCScreen
    {
        private container: HTMLDivElement;
        private webFloorTitleElement: HTMLHeadingElement;
        private webIconElement: HTMLImageElement;
        private floor: daikincity.building.DCWebFloor;

        constructor()
        {
            super(document.getElementById("webBuilding"));
            this.webFloorTitleElement = <HTMLHeadingElement> document.getElementById("webFloorTitle");
            this.container = <HTMLDivElement> document.getElementById("linksContainer");
            this.webIconElement = <HTMLImageElement> document.getElementById("webLinkIcon");
        }

        public showFloor(floor: daikincity.building.DCWebFloor): void
        {
            this.floor = floor;
            $(this.screenElement).hide();
            $(this.screenElement).fadeIn(500);
            this.clear();

            var img: HTMLImageElement = document.createElement("img");
            img.addEventListener("load", () => this.onBackgroundImageLoaded(), false);
            img.src = floor.backgroundImage;

            this.webFloorTitleElement.innerHTML = floor.name;
            this.webIconElement.src = floor.icon;

            this.container.innerHTML = "";

            var w: number = 300;

            for (var i: number = 0; i < floor.numLinks; i++)
            {
                var link: daikincity.building.DCWebLink = floor.getLinkAt(i);

                if (link.enabled)
                {
                    var linkElement: HTMLDivElement = document.createElement("div");
                    $(linkElement).addClass("web-link-info");

                    var titleElement: HTMLHeadingElement = document.createElement("h4");
                    titleElement.innerHTML = link.title;

                    var descriptionElement: HTMLParagraphElement = document.createElement("p");
                    descriptionElement.innerHTML = link.description;

                    var urlElement: HTMLAnchorElement = document.createElement("a");
                    $(urlElement).addClass("web-link-button");
                    urlElement.href = link.url;
                    urlElement.target = "_blank";

                    linkElement.appendChild(titleElement);
                    linkElement.appendChild(descriptionElement);
                    linkElement.appendChild(urlElement);

                    this.container.appendChild(linkElement);
                    w += 335;
                }
            }

            document.getElementById("webLinksModal").style.width = w + "px"; // firefox fix
        }

        private onBackgroundImageLoaded(): void
        {
            this.screenElement.style.backgroundImage = "url(" + this.floor.backgroundImage + ")";
            this.dispatchEvent(new away.events.Event("ready"));
        }

        public hide(): void
        {
            this.clear();
            super.hide();
        }

        public clear(): void
        {
            this.container.innerHTML = "";
        }
    }
} 