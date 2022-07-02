/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.hotel
{
    export class DCHotelScenarioMenu extends daikincity.ui.DCScreen
    {
        private scenarioOptions: HTMLUListElement;
        private info: DCHotelScenarioInformation;

        constructor(info: DCHotelScenarioInformation)
        {
            super(document.getElementById("scenarioMenu"));
            this.info = info;
            this.scenarioOptions = <HTMLUListElement> document.getElementById("scenarioOptions");
        }

        public addScenario(scenario: DCHotelRoomScenario): void
        {
            var li: HTMLLIElement = document.createElement("li");
            $(li).addClass("list-style-unchecked");
            var btn: HTMLButtonElement = document.createElement("button");
            btn.id = scenario.id.toString();
            btn.onclick = (e) => this.onScenarioSelected(e);
            var span: HTMLSpanElement = document.createElement("span");
            span.innerHTML = scenario.menuText;
            btn.appendChild(span);
            li.appendChild(btn);
            this.scenarioOptions.appendChild(li);
        }

        private onScenarioSelected(e: MouseEvent): void
        {
            var element: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;
            this.dispatchEvent(new daikincity.events.DCScenarioSelectEvent(daikincity.events.DCScenarioSelectEvent.SCENARIO_SELECTED, this.info.hotelApplication.getScenerioById(parseInt(element.id))));
        }
    }
} 