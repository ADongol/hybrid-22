/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.hotel
{
    export class DCHotelScenarioDetails extends daikincity.ui.DCScreen
    {
        public scenarioMenuBtn: HTMLButtonElement;
        public scenarioDescription: HTMLParagraphElement;
        public playBtn: HTMLButtonElement;
        public previousBtn: HTMLButtonElement;
        public nextBtn: HTMLButtonElement;

        private temperatureSetElement: HTMLParagraphElement;
        private temperatureRoomElement: HTMLParagraphElement;

        private controllerUnitElement: HTMLDivElement;
        private controllerOffElement: HTMLImageElement;
        private controllerOnElement: HTMLImageElement;

        constructor()
        {
            super(document.getElementById("scenarioDetails"));

            this.scenarioMenuBtn = <HTMLButtonElement> document.getElementById("scenarioMenuBtn");
            this.scenarioDescription = <HTMLParagraphElement> document.getElementById("scenarioDescription");

            this.playBtn = <HTMLButtonElement> document.getElementById("scenarioPlayBtn");
            this.previousBtn = <HTMLButtonElement> document.getElementById("scenarioPreviousBtn");
            this.nextBtn = <HTMLButtonElement> document.getElementById("scenarioNextBtn");

            this.temperatureRoomElement = <HTMLParagraphElement> document.getElementById("temperatureRoom");
            this.temperatureSetElement = <HTMLParagraphElement> document.getElementById("temperatureSet");

            this.controllerUnitElement = <HTMLDivElement>document.getElementById("controllerUnit");
            this.controllerOffElement = <HTMLImageElement> this.controllerUnitElement.querySelector(".controller");
            this.controllerOnElement = <HTMLImageElement> this.controllerUnitElement.querySelector(".controller-highlight");
        }

        public show(scenario: DCHotelRoomScenario = null): void
        {
            if (scenario != null)
            {
                this.scenarioDescription.innerHTML = scenario.description;
                if (scenario.controllerActive)
                {
                    if (scenario.roomTemperature > 0) this.temperatureRoomElement.innerHTML = scenario.roomTemperature.toString();
                    if (scenario.setTemperature > 0) this.temperatureSetElement.innerHTML = scenario.setTemperature.toString();
                    this.controllerOffElement.style.visibility = "hidden";
                    this.controllerOnElement.style.visibility = "visible";
                }
                else
                {
                    this.temperatureRoomElement.innerHTML = "--";
                    this.temperatureSetElement.innerHTML = "--";
                    this.controllerOffElement.style.visibility = "visible";
                    this.controllerOnElement.style.visibility = "hidden";
                }
            }
            super.show();
        }
    }
}