module daikincity.ui.application.hotel
{
    export class DCHotelScenarioInformation
    {
        public static STATE_TUTORIAL: string = "stateTutorial";
        public static STATE_MENU: string = "stateMenu";
        public static STATE_DETAILS: string = "stateDetails";
        private state: string;

        public tutorial: DCHotelScenarioTutorial;
        public menu: DCHotelScenarioMenu;
        public details: DCHotelScenarioDetails;
        public hotelApplication: DCHotelRoomApplication;

        constructor(hotelApplication:DCHotelRoomApplication)
        {
            this.hotelApplication = hotelApplication;
            this.tutorial = new DCHotelScenarioTutorial();
            this.tutorial.menuBtn.onclick = (e) => this.onMenuButtonClicked(e);

            this.menu = new DCHotelScenarioMenu(this);

            this.details = new DCHotelScenarioDetails();
            this.details.scenarioMenuBtn.onclick = (e) => this.scenarioMenuBtnClicked(e);

            this.setState(DCHotelScenarioInformation.STATE_TUTORIAL);
        }

        public setScenarios(): void
        {
            for (var i: number = 0; i < this.hotelApplication.numScenarios; i++)
            {
                var scenario: DCHotelRoomScenario = this.hotelApplication.getScenarioAt(i);
                if (scenario.menuText.length > 0)
                {
                    this.menu.addScenario(scenario);
                }
            }
        }

        public setState(toState: string): void
        {
            this.state = toState;

            this.hideAll();

            switch (this.state)
            {
                case DCHotelScenarioInformation.STATE_TUTORIAL:
                    this.tutorial.show();
                    break;
                case DCHotelScenarioInformation.STATE_MENU:
                    this.menu.show();
                    break;
                case DCHotelScenarioInformation.STATE_DETAILS:
                    this.details.show(this.hotelApplication.currentScenario);
                    break;
            }
        }

        public hideAll(): void
        {
            this.tutorial.hide();
            this.menu.hide();
            this.details.hide();
        }

        public showDetails():void
        {
            this.setState(DCHotelScenarioInformation.STATE_DETAILS);
        }

        private onMenuButtonClicked(e: MouseEvent): void
        {
            this.setState(DCHotelScenarioInformation.STATE_MENU);
        }

        private scenarioMenuBtnClicked(e: MouseEvent): void
        {
            this.setState(DCHotelScenarioInformation.STATE_MENU);
        }
    }
} 