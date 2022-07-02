module daikincity.building.library
{
    export class DCLibraryCategory
    {
        private _id: number;
        private _name: string;
        public hotspotX: string;
        public hotspotY: string;
        private _documents: Array<DCLibraryDocument>;

        constructor(id: number, name: string, hotspotX: string, hotspotY:string)
        {
            this._id = id;
            this._name = name;
            this.hotspotX = hotspotX;
            this.hotspotY = hotspotY;
            this._documents = [];
        }

        public addDocument(document: DCLibraryDocument): number
        {
            return this._documents.push(document);
        }

        public getDocumentAt(index: number): DCLibraryDocument
        {
            return this._documents[index];
        }

        public static fromJson(json: any): DCLibraryCategory
		{
            return new DCLibraryCategory(parseInt(json.id), json.name, json.hotspotX, json.hotspotY);
		}

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get numDocuments(): number { return this._documents.length; }
    }
}