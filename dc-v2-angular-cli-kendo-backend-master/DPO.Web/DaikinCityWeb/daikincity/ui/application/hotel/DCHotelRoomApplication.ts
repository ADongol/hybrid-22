/// <reference path="../../DCScreen.ts" />
module daikincity.ui.application.hotel
{
    export class DCHotelRoomApplication extends DCScreen
    {
        private static HOTEL_ROOM_CONFIG: string = "daikincityweb/json/hotel_room.json";

        private currentFloor: daikincity.building.DCApplicationFloor = null;
        private floorNavigationContainer: HTMLDivElement;
        private floorMenu: daikincity.ui.DCFloorMenu;
        private scenarioInformation: DCHotelScenarioInformation;
        private hotelView: DCHotelRoomView;
        private timeline: DCHotelRoomTimeline;

        private scenarios: Array<DCHotelRoomScenario>;
        public currentScenario: DCHotelRoomScenario = null;
        private currentScenarioIndex: number = 0;

        private loaded: boolean = false;

        constructor()
        {
            super(document.getElementById("hotelRoomApplication"));

            this.scenarios = [];

            this.scenarioInformation = new DCHotelScenarioInformation(this);
            this.scenarioInformation.menu.addEventListener(daikincity.events.DCScenarioSelectEvent.SCENARIO_SELECTED, this.onScenarioMenuItemSelected, this);
            this.scenarioInformation.details.playBtn.onclick = (e) => this.onPlayButtonClicked(e);
            this.scenarioInformation.details.previousBtn.onclick = (e) => this.onPreviousButtonClicked(e);
            this.scenarioInformation.details.nextBtn.onclick = (e) => this.onNextButtonClicked(e);

            this.hotelView = new DCHotelRoomView();

            this.floorNavigationContainer = <HTMLDivElement> document.getElementById("hotelRoomFloorNavigation");
            this.floorMenu = new daikincity.ui.DCFloorMenu();
            this.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, this.onFloorSelected, this);
            this.floorNavigationContainer.appendChild(this.floorMenu.element);

            this.timeline = new DCHotelRoomTimeline();
            this.timeline.addEventListener(daikincity.events.DCTimelineChangedEvent.TIMELINE_CHANGED, this.onTimelineChanged, this);

            // hide right menu as not used
            document.getElementById("hotelRoomSavings").style.display = "none";
        }

        public show(floor: daikincity.building.DCApplicationFloor = null):void
        {
            this.currentFloor = floor;

            if (!this.loaded)
            {
                this.load();
            }
            else 
            {
                this.onScenariosReady();
            }

            super.show();

            $("#scenarioInformation").width(0);
            $("#scenarioInformation").animate({ width: "35%" }, 250);

            $("#hotelRoomView").css("background-color", "#BDEBFF");
            $("#hotelRoomView").animate({ backgroundColor: "#5DC7F1" }, 250);

            $("#hotelRoomTimeline").height(0);
            $("#hotelRoomTimeline").animate({ height: "27.5%" }, 250);

            this.timeline.addListeners();
        }

        public hide(): void
        {
            this.timeline.removeListeners();
            super.hide();
        }

        private load(): void
        {
            $.ajax(DCHotelRoomApplication.HOTEL_ROOM_CONFIG, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
        }

        private onConfigLoaded(json: any): void
        {
            var config: any = json.config;

            var scenariosJson: any[] = config.scenarios.scenario;

            for (var i: number = 0; i < scenariosJson.length; i++)
            {
                this.scenarios.push(DCHotelRoomScenario.fromJson(scenariosJson[i]));
            }

            this.scenarioInformation.setScenarios();
            this.onScenariosReady();

            this.loaded = true;
        }

        private onConfigLoadError(): void
        {
            trace("Error loading hotel room config");
        }

        private onScenariosReady(): void
        {
            this.setScenarioAt(0);

            this.scenarioInformation.setState(DCHotelScenarioInformation.STATE_TUTORIAL);
            this.timeline.value = 0;

            if (this.currentFloor != null)
            {
                this.setFloorMenu();
            }
        }

        public getScenerioById(id: number): daikincity.ui.application.hotel.DCHotelRoomScenario
        {
            var i: number = this.scenarios.length;
            while (i--)
            {
                if (this.scenarios[i].id == id) return this.scenarios[i];
            }
            return null;
        }

        public getScenarioAt(index: number): DCHotelRoomScenario
        {
            if (index < 0) index = 0;
            else if (index >= this.scenarios.length) index = this.scenarios.length - 1;
            return this.scenarios[index];
        }

        public setScenario(scenario: DCHotelRoomScenario): void
        {
            this.currentScenario = scenario;
            this.currentScenarioIndex = this.scenarios.indexOf(this.currentScenario);

            this.hotelView.setScenario(this.currentScenario);
            this.scenarioInformation.showDetails();
        }

        public setScenarioAt(index: number): void
        {
            if (index < 0) index = 0;
            else if (index >= this.scenarios.length) index = this.scenarios.length - 1;
            this.setScenario(this.getScenarioAt(index));
        }

        private onScenarioMenuItemSelected(e: daikincity.events.DCScenarioSelectEvent): void
        {
            this.setScenario(e.scenario);
            this.timeline.value = this.currentScenario.timeFrom + (this.currentScenario.timeTo - this.currentScenario.timeFrom) * 0.5;
            this.scenarioInformation.showDetails();
        }

        private onFloorSelected(e: daikincity.events.DCFloorSelectedEvent): void
        {
            this.dispatchEvent(e.clone());
        }

        private onTimelineChanged(e: daikincity.events.DCTimelineChangedEvent): void
        {
            if (this.timeline.dragging || this.timeline.animating)
            {
                var scenario: DCHotelRoomScenario;
                for (var i: number = 0; i < this.scenarios.length; i++)
                {
                    scenario = this.scenarios[i];
                    if (this.timeline.value >= scenario.timeFrom && this.timeline.value < scenario.timeTo)
                    {
                        this.setScenario(scenario);
                        break;
                    }
                }
            }
        }

        private nextHotspotScenario(): DCHotelRoomScenario
        {
            for (var i: number = this.currentScenarioIndex + 1; i < this.scenarios.length; i++)
            {
                if (this.scenarios[i].type == DCHotelRoomScenario.TYPE_HOTSPOT)
                {
                    return this.scenarios[i];
                }
            }

            return null;
        }

        private previousHotspotScenario(): DCHotelRoomScenario
        {
            for (var i: number = this.currentScenarioIndex - 1; i >= 0; i--)
            {
                if (this.scenarios[i].type == DCHotelRoomScenario.TYPE_HOTSPOT)
                {
                    return this.scenarios[i];
                }
            }

            return null;
        }

        private onPlayButtonClicked(e: MouseEvent): void
        {
            var scenario: DCHotelRoomScenario = this.nextHotspotScenario();
            if (scenario != null)
            {
                this.timeline.animateTo(scenario.time);
            }
        }

        private onPreviousButtonClicked(e: MouseEvent): void
        {
            var scenario: DCHotelRoomScenario = this.previousHotspotScenario();
            if (scenario != null)
            {
                this.setScenario(scenario);
                this.timeline.value = scenario.time;
                this.scenarioInformation.showDetails();
            }
        }

        private onNextButtonClicked(e: MouseEvent): void
        {
            var scenario: DCHotelRoomScenario = this.nextHotspotScenario();
            if (scenario != null)
            {
                this.setScenario(scenario);
                this.timeline.value = scenario.time;
                this.scenarioInformation.showDetails();
            }
        }

        private setFloorMenu(): void
        {
            if (this.currentFloor.building.numFloors > 1)
            {
                this.floorMenu.populate(this.currentFloor.building, this.currentFloor.id);

                // set buttons widths
                var w: number = 100 / this.floorMenu.numButtons;
                for (var i: number = 0; i < this.floorMenu.numButtons; i++)
                {
                    this.floorMenu.getButtonAt(i).element.style.width = w.toString() + "%";
                }
            }
            else
            {
                this.floorMenu.clear();
            }
        }

        public get numScenarios(): number { return this.scenarios.length; }
    }
} 