/// <reference path="DCScreen.ts" />
module daikincity.ui
{
    export class DCBuildingScreen extends daikincity.ui.DCScreen
    {
        public static STATE_BUILDING_MENU: string = "buildingMenu";
        public static STATE_FUNCTIONAL_FLOOR: string = "functionalFloor";
        public static STATE_APPLICATION_FLOOR: string = "applicationFloor";
        public static STATE_WEB_FLOOR: string = "webFloor";
        private state: string;

        private core: daikincity.DCCore;
        private functionalFloorScreen: DCFunctionalFloorScreen;
        private applicationFloorScreen: DCApplicationFloorScreen;
        private buildingMenuScreen: DCBuildingMenuScreen;
        private webFloorScreen: DCWebFloorScreen;
        private floors: Array<DCScreen>;

        private currentFloor: daikincity.building.DCFloor = null;

        constructor()
        {
            super(document.getElementById("buildingScreen"));

            this.core = daikincity.DCCore.I;
            this.floors = [];

            this.buildingMenuScreen = new DCBuildingMenuScreen(this);
            this.floors.push(this.buildingMenuScreen);

            this.functionalFloorScreen = new DCFunctionalFloorScreen();
            this.functionalFloorScreen.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, this.onFloorSelected, this);
            this.floors.push(this.functionalFloorScreen);

            this.applicationFloorScreen = new DCApplicationFloorScreen();
            this.applicationFloorScreen.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, this.onFloorSelected, this);
            this.floors.push(this.applicationFloorScreen);

            this.webFloorScreen = new DCWebFloorScreen();
            this.floors.push(this.webFloorScreen);

            for (var i: number = 0; i < this.floors.length; i++)
            {
                this.floors[i].addEventListener("ready", this.onScreenReady, this);
            }
        }

        private onScreenReady(e: away.events.Event): void
        {
            this.dispatchEvent(e.clone());
        }

        private populate(): void
        {
            if (this.core.currentBuilding.numFloors > 1)
            {
                if (this.core.defaultFloorName.length > 0)
                {
                    var floor: daikincity.building.DCFloor = this.core.currentBuilding.getFloorByHashName(this.core.defaultFloorName);
                    this.core.defaultFloorName = ""; // reset once used
                    if (floor != null)
                    {
                        this.showFloor(floor);
                    }
                    else
                    {
                        // default to floor menu on error
                        this.buildingMenuScreen.showBuilding(this.core.currentBuilding);
                        this.setState(DCBuildingScreen.STATE_BUILDING_MENU);
                    }
                }
                else
                {
                    this.buildingMenuScreen.showBuilding(this.core.currentBuilding);
                    this.setState(DCBuildingScreen.STATE_BUILDING_MENU);
                }
            }
            else
            {
                this.showFloor(this.core.currentBuilding.getFloorAt(0));
            }
        }

        public setState(toState: string): void
        {
            if (this.state == toState) return;
            this.state = toState;

            var screen: DCScreen = null;

            switch (this.state)
            {
                case DCBuildingScreen.STATE_BUILDING_MENU:
                    screen = this.buildingMenuScreen;
                    break;
                case DCBuildingScreen.STATE_APPLICATION_FLOOR:
                    screen = this.applicationFloorScreen;
                    break;
                case DCBuildingScreen.STATE_FUNCTIONAL_FLOOR:
                    screen = this.functionalFloorScreen;
                    break;
                case DCBuildingScreen.STATE_WEB_FLOOR:
                    screen = this.webFloorScreen;
                    break;
            }

            if (screen != null)
            {
                this.hideAll();
                screen.show();
            }
        }

        public hideAll(): void
        {
            for (var i: number = 0; i < this.floors.length; i++)
            {
                this.floors[i].hide();
            }
        }

        public show(): void
        {
            super.show();
            this.populate();
        }

        public showFloor(floor: daikincity.building.DCFloor): void
        {
            this.currentFloor = floor;

            window.location.hash = this.currentFloor.building.hashName + (this.currentFloor.building.numFloors > 1 ? "-" + this.currentFloor.hashName : "");

            switch (floor.type)
            {
                case daikincity.building.DCFloor.TYPE_APPLICATION:
                    this.setState(DCBuildingScreen.STATE_APPLICATION_FLOOR);
                    this.applicationFloorScreen.showFloor(<daikincity.building.DCApplicationFloor> floor);
                    break;
                case daikincity.building.DCFloor.TYPE_FUNCTIONAL:
                    this.setState(DCBuildingScreen.STATE_FUNCTIONAL_FLOOR);
                    this.functionalFloorScreen.showFloor(<daikincity.building.functional.DCFunctionalFloor> floor);
                    break; 
                case daikincity.building.DCFloor.TYPE_WEB:
                    this.setState(DCBuildingScreen.STATE_WEB_FLOOR);
                    this.webFloorScreen.showFloor(<daikincity.building.DCWebFloor> floor);
                    break;
            }
        }

        private onFloorSelected(e: daikincity.events.DCFloorSelectedEvent): void
        {
            this.showFloor(e.floor);
        }

        private clean(): void
        {
            // remove current building
            this.currentFloor = null;
        }
    }
}  