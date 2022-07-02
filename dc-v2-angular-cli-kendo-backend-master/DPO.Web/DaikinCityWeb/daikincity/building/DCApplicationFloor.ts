/// <reference path="DCFloor.ts" />
module daikincity.building
{
    export class DCApplicationFloor extends DCFloor
    {
        public static APPLICATION_HOTEL_ROOM: number = 1;
        public static APPLICATION_LIBRARY: number = 2;
        public static APPLICATION_BROADCAST_CENTRE: number = 3;
        public static APPLICATION_HOUSE: number = 4;
        public static APPLICATION_PROJECT_OFFICE: number = 5;

        private _applicationId: number;

        constructor(id: number, type: string, name: string, applicationId:number)
        {
            super(id, type, name);
            this._applicationId = applicationId;
        }

        public get applicationId(): number { return this._applicationId; }
    }
}