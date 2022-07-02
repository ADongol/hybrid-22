/// <reference path="DCScreen.ts" />
module daikincity.ui
{
    export class DCBuildingMenuScreen extends daikincity.ui.DCScreen
    {
        private floorMenu: DCFloorMenu;
        private buildingScreen: DCBuildingScreen;
        private currentBuilding: daikincity.building.DCBuilding;

        private buildingFloorMenuContainerElement: HTMLDivElement;
        private buildingMenuTitleElement: HTMLHeadingElement;
        private buildingMessageElement: HTMLParagraphElement;

        constructor(buildingScreen: DCBuildingScreen)
        {
            super(document.getElementById("buildingMenu"));
            this.buildingScreen = buildingScreen;

            this.buildingFloorMenuContainerElement = <HTMLDivElement> document.getElementById("buildingFloorMenuContainer");
            this.buildingMenuTitleElement = <HTMLHeadingElement> document.getElementById("buildingMenuTitle");
            this.buildingMessageElement = <HTMLParagraphElement> document.getElementById("buildingMessage");

            this.floorMenu = new DCFloorMenu();
            this.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, this.onFloorSelected, this);
            this.buildingFloorMenuContainerElement.appendChild(this.floorMenu.element);
        }

        public showBuilding(building: daikincity.building.DCBuilding): void
        {
            this.screenElement.style.backgroundImage = "none";
            this.currentBuilding = building;
            this.floorMenu.populate(this.currentBuilding);

            this.buildingMenuTitleElement.innerHTML = this.currentBuilding.name;
            this.buildingMessageElement.innerHTML = "Welcome to the " + this.currentBuilding.name + ", please select an area of the building you wish to explore from the list below";

            if (this.currentBuilding.menuImage != undefined)
            {
                var img: HTMLImageElement = document.createElement("img");
                img.addEventListener("load", () => this.onBuildingImageLoaded(), false);
                img.src = this.currentBuilding.menuImage;
            }
        }

        private onBuildingImageLoaded(): void
        {
            this.screenElement.style.backgroundImage = "url(" + this.currentBuilding.menuImage + ")";
            this.screenElement.style.backgroundSize = "contain";
            this.dispatchEvent(new away.events.Event("ready"));
        }

        private onFloorSelected(e:daikincity.events.DCFloorSelectedEvent): void
        {
            this.buildingScreen.showFloor(e.floor);
        }
    }
} 