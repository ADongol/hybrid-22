module daikincity.events 
{
    export class DCScenarioSelectEvent extends away.events.Event
    {
        public static SCENARIO_SELECTED: string = "scenarioSelected";
        public scenario: daikincity.ui.application.hotel.DCHotelRoomScenario;

        constructor(type: string, scenario: daikincity.ui.application.hotel.DCHotelRoomScenario)
        {
            super(type);
            this.scenario = scenario;
        }

        public clone(): away.events.Event
        {
            return new DCScenarioSelectEvent(this.type, this.scenario);
        }
    }
} 