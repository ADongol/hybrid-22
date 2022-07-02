module daikincity.events 
{
    export class DCFloorSelectedEvent extends away.events.Event
    {
        public static FLOOR_SELECTED: string = "floorSelected";

        public floor: daikincity.building.DCFloor;

        constructor(type: string, floor: daikincity.building.DCFloor)
        {
            super(type);
            this.floor = floor;
        }

        public clone(): away.events.Event
        {
            return new DCFloorSelectedEvent(this.type, this.floor);
        }
    }
}