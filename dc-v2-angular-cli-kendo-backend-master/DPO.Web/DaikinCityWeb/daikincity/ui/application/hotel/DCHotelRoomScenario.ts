module daikincity.ui.application.hotel
{
    export class DCHotelRoomScenario
    {
        public static TYPE_HOTSPOT: string = "hotspot";
        public static TYPE_EMPTY: string = "empty";

        public id: number;
        public type: string;
        public setTemperature: number;
        public roomTemperature: number;
        public timeFrom: number;
        public timeTo: number;
        public controllerActive: boolean;
        public airflowEnabled: boolean;
        public roomImage: string;
        public overlayImage: string;
        public animationImage: string;
        public menuText: string;
        public description: string;
        public withControlValue: number;
        public withoutControlValue: number;

        constructor(id: number, type: string, setTemperature: number, roomTemperature: number, timeFrom: number, timeTo: number, controllerActive: boolean, airflowEnabled: boolean, roomImage: string, overlayImage: string, animationImage:string, menuText: string, description: string, withControlValue: number, withoutControlValue:number)
        {
            this.id = id;
            this.type = type;
            this.setTemperature = setTemperature;
            this.roomTemperature = roomTemperature;
            this.timeFrom = timeFrom;
            this.timeTo = timeTo;
            this.controllerActive = controllerActive;
            this.airflowEnabled = airflowEnabled;
            this.roomImage = roomImage;
            this.overlayImage = overlayImage;
            this.animationImage = animationImage;
            this.menuText = menuText;
            this.description = description;
            this.withControlValue = withControlValue;
            this.withoutControlValue = withoutControlValue;
        }

        public get time(): number
        {
            return this.timeFrom + (this.timeTo - this.timeFrom) * 0.5;
        }

        public static fromJson(json: any): DCHotelRoomScenario
        {
            var id: number = parseInt(json.id);
            var type: string = json.type;
            var setTemperature: number = parseFloat(json.temperature.set);
            var roomTemperature: number = parseFloat(json.temperature.room);
            var timeFrom: number = parseFloat(json.time.from);
            var timeTo: number = parseFloat(json.time.to);
            var controllerActive: boolean = json.controller.active.toLowerCase() == "true";
            var airflowEnabled: boolean = json.controller.airflowEnabled.toLowerCase() == "true";
            var roomImage: string = json.roomImage;
            var overlayImage: string = json.overlayImage;
            var animationImage: string = json.animationImage;
            var menuText: string = json.menuText.replace(/degrees/gi, "&deg;");
            var description: string = json.description.replace(/degrees/gi, "&deg;");
            var withControlValue: number = parseFloat(json.withControlValue);
            var withoutControlValue: number = parseFloat(json.withoutControlValue);

            return new DCHotelRoomScenario(id, type, setTemperature, roomTemperature, timeFrom, timeTo, controllerActive, airflowEnabled, roomImage, overlayImage, animationImage, menuText, description, withControlValue, withoutControlValue);
        }
    }
} 