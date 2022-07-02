/// <reference path="DCScreen.ts" />
module daikincity.ui
{
    export class DCApplicationFloorScreen extends daikincity.ui.DCScreen
    {
        private currentFloor: daikincity.building.DCApplicationFloor = null;
        private hotelRoom: daikincity.ui.application.hotel.DCHotelRoomApplication;
        private library: daikincity.ui.application.library.DCLibraryApplication;
        private communicationsCenter: daikincity.ui.application.communications.DCCommunicationsCenterApplication;
        private residence: daikincity.ui.application.residence.DCResidenceApplication;
        private applications: Array<DCScreen>;

        constructor()
        {
            super(document.getElementById("applicationBuilding"));

            this.applications = [];

            this.hotelRoom = new daikincity.ui.application.hotel.DCHotelRoomApplication();
            this.hotelRoom.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, this.onFloorSelected, this);
            this.applications.push(this.hotelRoom);

            this.library = new daikincity.ui.application.library.DCLibraryApplication();
            this.applications.push(this.library);

            this.communicationsCenter = new daikincity.ui.application.communications.DCCommunicationsCenterApplication();
            this.applications.push(this.communicationsCenter);

            this.residence = new daikincity.ui.application.residence.DCResidenceApplication();
            this.applications.push(this.residence);

            this.hideAll();
        }

        public showFloor(floor: daikincity.building.DCApplicationFloor): void
        {
            this.currentFloor = floor;
            this.hideAll();

            switch (floor.applicationId)
            {
                case daikincity.building.DCApplicationFloor.APPLICATION_HOTEL_ROOM:
                    this.hotelRoom.show(floor);
                    break;
                case daikincity.building.DCApplicationFloor.APPLICATION_LIBRARY:
                    this.library.show();
                    break;
                case daikincity.building.DCApplicationFloor.APPLICATION_BROADCAST_CENTRE:
                    this.communicationsCenter.show();
                    break;
                case daikincity.building.DCApplicationFloor.APPLICATION_HOUSE:
                    this.residence.show();
                    break;
            }

            this.dispatchEvent(new away.events.Event("ready"));
        }

        private onFloorSelected(e: daikincity.events.DCFloorSelectedEvent): void
        {
            this.dispatchEvent(e.clone());
        }

        private hideAll(): void
        {
            for (var i: number = 0; i < this.applications.length; i++)
            {
                this.applications[i].hide();
            }
        }
    }
} 