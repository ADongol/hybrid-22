/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.hotel
{
    export class DCHotelScenarioTutorial extends daikincity.ui.DCScreen
    {
        public menuBtn: HTMLButtonElement;

        constructor()
        {
            super(document.getElementById("scenarioTutorial"));

            this.menuBtn = <HTMLButtonElement> document.getElementById("hotelScenarioSelectBtn");
        }
    }
}