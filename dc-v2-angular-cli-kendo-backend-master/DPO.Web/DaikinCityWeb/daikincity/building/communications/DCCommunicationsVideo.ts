module daikincity.building.communications
{
    export class DCCommunicationsVideo
    {
        private _id: number;
        private _title: string;
        private _thumbnail: string;
        private _url: string;

        constructor(id: number, title: string, thumbnail: string, url: string)
        {
            this._id = id;
            this._title = title;
            this._thumbnail = thumbnail;
            this._url = url;
        }

        public static fromJson(json: any): DCCommunicationsVideo
        {
            var id: number = parseInt(json.id);
            var title: string = json.title;
            var thumbnail: string = json.thumb;
            var url: string = json.url;
            return new DCCommunicationsVideo(id, title, thumbnail, url);
        }

        public get id(): number { return this._id; }
        public get title(): string { return this._title; }
        public get thumbnail(): string { return this._thumbnail; }
        public get url(): string { return this._url; }
    }
} 