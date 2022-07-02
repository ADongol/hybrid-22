module daikincity.building.library
{
    export class DCLibraryDocument
    {
        private _id: number;
		private _name: string;
        private _path: string;
		private _thumb: string;

		constructor(id: number, name: string, path: string, thumb: string) 
		{
            this._id = id;
            this._name = name;
            this._path = path;
            this._thumb = thumb;
		}

        public static fromJson(json: any): DCLibraryDocument
		{
            var id: number = parseInt(json.id);
            var name: string = json.name.toUpperCase(); // quick hack for current sorting method to work. TODO update sorting method to do proper case insensitive sorting
            var path: string = json.path;
            var thumb: string = json.thumb;

            return new DCLibraryDocument(id, name, path, thumb);
		}

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get path(): string { return this._path; }
        public get thumb(): string { return this._thumb; }
    }
}