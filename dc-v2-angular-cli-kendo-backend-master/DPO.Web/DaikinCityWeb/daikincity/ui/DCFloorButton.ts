module daikincity.ui
{
    export class DCFloorButton
    {
        public floor: daikincity.building.DCFloor;
        public element: HTMLButtonElement;

        constructor(floor: daikincity.building.DCFloor)
        {
            this.floor = floor;

            this.element = document.createElement("button");
            this.element.id = floor.id.toString();
            $(this.element).addClass("floorButton");
            var titleElement: HTMLSpanElement = document.createElement("span");
            titleElement.innerHTML = floor.name;
            this.element.appendChild(titleElement);
        }
    }
} 