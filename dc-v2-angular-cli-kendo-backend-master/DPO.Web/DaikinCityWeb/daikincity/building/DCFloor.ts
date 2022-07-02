module daikincity.building
{
    export class DCFloor
    {
        public static TYPE_APPLICATION: string = "application";
        public static TYPE_FUNCTIONAL: string = "functional";
        public static TYPE_WEB: string = "web";

        private _id: number;
        private _type: string;
        private _name: string;

        public building: DCBuilding = null;

        constructor(id: number, type: string, name: string)
        {
            this._id = id;
            this._type = type;
            this._name = name;
        }

        public static fromJson(json: any): DCFloor
        {
            var id: number = parseInt(json.id);
            var type: string = (<string> json.type).toLowerCase();
            var name: string = <string> json.name;
            var floor: DCFloor;

            switch (type)
            {
                case DCFloor.TYPE_APPLICATION:
                    var applicationId: number = parseInt(json.applicationId);
                    floor = new DCApplicationFloor(id, type, name, applicationId);
                    break;
                case DCFloor.TYPE_FUNCTIONAL:
                    floor = new functional.DCFunctionalFloor(id, type, name, parseFloat(json.size), json.floorImage);

                    var configurationsJson: Array<any> = json.configurations.configuration;
                    for (var i: number = 0; i < configurationsJson.length; i++)
                    {
                        (<functional.DCFunctionalFloor>floor).addConfiguration(functional.DCFunctionalConfiguration.fromJson(configurationsJson[i]));
                    }

                    var altConfigurationsJson: Array<any> = json.alternativeConfigurations.configuration;
                    for (var i: number = 0; i < altConfigurationsJson.length; i++)
                    {
                        (<functional.DCFunctionalFloor>floor).addAlternativeConfiguration(functional.DCFunctionalConfiguration.fromJson(altConfigurationsJson[i]));
                    }
                    break;
                case DCFloor.TYPE_WEB:
                    floor = new DCWebFloor(id, type, name, json.backgroundImage, json.icon);
                    var links: Array<any> = json.links.link;
                    for (var i: number = 0; i < links.length; i++)
                    {
                        (<DCWebFloor> floor).addWebLink(DCWebLink.fromJson(links[i]));
                    }

                    break;
                default:
                    throw new Error("Invalid type for floor with id " + id);
                    //break;
            }

            return floor;
        }

        public get hashName(): string
        {
            return this._name.toLowerCase().replace(/\s+/g, "");
        }

        public get id(): number { return this._id; }
        public get type(): string { return this._type; }
        public get name(): string { return this._name; }
    }
} 