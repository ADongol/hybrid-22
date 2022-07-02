module daikincity.events 
{
    export class DCBuildingChangeEvent extends away.events.Event
    {
        public static BUILDING_CHANGED: string = "buildingChanged";

        public building: daikincity.building.DCBuilding;
        public playIntro: boolean;

        constructor(type: string, building: daikincity.building.DCBuilding, playInto:boolean = true)
        {
            super(type);
            this.building = building;
            this.playIntro = playInto;
        }
    }
}