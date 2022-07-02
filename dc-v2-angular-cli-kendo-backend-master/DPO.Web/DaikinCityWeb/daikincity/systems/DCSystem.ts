module daikincity.system
{
    export class DCSystem
    {
        private _id: number;
        private _name: string;
        private _description: string;
        private _image: string;
        private _icon: string;

        constructor(id: number, name: string, description: string, image: string, icon:string)
        {
            this._id = id;
            this._name = name;
            this._description = description;
            this._image = image;
            this._icon = icon;
        }

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get description(): string { return this._description; }
        public get image(): string { return this._image; }
        public get icon(): string { return this._icon; }

        public static fromJson(json: any): DCSystem
        {
            var id: number = parseInt(json.id);
            var name: string = json.name;
            var description: string = json.description;
            description = description.replace(/\\n/g, "<br />");
            var image: string = json.image;
            var icon: string = json.icon;
            return new DCSystem(id, name, description, image, icon);
        }
    }
} 