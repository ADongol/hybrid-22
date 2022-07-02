module daikincity.building.library
{
    export class DCLibraryDocumentType
    {
        private _id: number;
        private _name: string;
        private _color: string;

        constructor(id: number, name: string, color:string)
        {
            this._id = id;
            this._name = name;
            this._color = color;
        }

        public static fromJson(json: any): DCLibraryDocumentType
        {
            return new DCLibraryDocumentType(parseInt(json.id), json.name, "#" + json.color);
        }

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get color(): string { return this._color; }
    }
}