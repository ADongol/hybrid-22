module daikincity.building
{
    export class DCWebLink
    {
        private _id: number;
        private _url: string;
        private _title: string;
        private _description: string;
        private _enabled: boolean;

        constructor(id: number, url: string, title: string, description: string, enabled:boolean)
        {
            this._id = id;
            this._url = url;
            this._title = title;
            this._description = description;
            this._enabled = enabled;
        }

        public static fromJson(json: any): DCWebLink
        {
            var id: number = parseFloat(json.id);
            var url: string = json.url;
            var title: string = json.title;
            var description: string = json.description;
            var enabled: boolean = json.enabled;

            return new DCWebLink(id, url, title, description, enabled);
        }

        public get id(): number { return this._id; }
        public get url(): string { return this._url; }
        public get title(): string { return this._title; }
        public get description(): string { return this._description; }
        public get enabled(): boolean { return this._enabled; }
    }
}