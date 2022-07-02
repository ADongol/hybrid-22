module daikincity.ui
{
    export class DCFloorMenu extends away.events.EventDispatcher
    {
        private currentBuilding: daikincity.building.DCBuilding;
        public element: HTMLDivElement;
        private floorButtons: Array<DCFloorButton>;

        constructor(building: daikincity.building.DCBuilding = null)
        {
            super();
            this.element = document.createElement("div");
            $(this.element).addClass("floor-menu");
            this.floorButtons = [];
            if (building != null)  this.populate(building);
        }

        public populate(building: daikincity.building.DCBuilding, highlightId:number = -1): void
        {
            this.currentBuilding = building;
            this.clear();

            for (var i: number = 0; i < this.currentBuilding.numFloors; i++)
            {
                var floorButton: DCFloorButton = new DCFloorButton(this.currentBuilding.getFloorAt(i));
                //floorButton.element.onclick = (e) => this.onFloorSelected(e);
                $(floorButton.element).on("click touchend", $.proxy(this.onFloorSelected, this));
                if (floorButton.floor.id == highlightId) $(floorButton.element).addClass("floorButtonHighlighted");
                this.element.appendChild(floorButton.element);
                this.floorButtons.push(floorButton);
            }
        }

        public getButtonAt(index: number): DCFloorButton
        {
            return this.floorButtons[index];
        }

        private onFloorSelected(e: MouseEvent): void
        {
            var element: HTMLElement = <HTMLElement> e.currentTarget;
            var floor: daikincity.building.DCFloor = this.currentBuilding.getFloorById(parseInt(element.id));
            this.dispatchEvent(new daikincity.events.DCFloorSelectedEvent(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, floor));
        }

        public clear(): void
        {
            this.floorButtons = [];
            this.element.innerHTML = "";
        }

        public get numButtons(): number { return this.floorButtons.length; }
    }
}