module daikincity.building.library
{
    export class DCLibraryDirectory
    {
        public parentDirectory: DCLibraryDirectory = null;
        private documents: Array<DCLibraryDocument>;
        private directories: Array<DCLibraryDirectory>;
        private _id: number;
        private _index: number;
        private _name: string;
        private _protected: boolean;

        constructor(id: number, index: number, name: string, _protected:boolean)
        {
            this._id = id;
            this._index = index;
            this._name = name;
            this._protected = _protected;
            this.documents = [];
            this.directories = [];

            DCLibraryCore.I.directoriesDict[this._id] = this;
        }

        public addDocument(document: DCLibraryDocument): number
        {
            return this.documents.push(document);
        }

        public addDirectory(directory: DCLibraryDirectory): number
        {
            directory.parentDirectory = this;
            return this.directories.push(directory);
        }

        public getDocumentAt(index: number): DCLibraryDocument
        {
            return this.documents[index];
        }

        public getDirectoryAt(index: number): DCLibraryDirectory
        {
            return this.directories[index];
        }

        public getDocumentById(id: number): DCLibraryDocument
        {
            if (this.documents.length > 0)
            {
                var i: number = -1, l: number = this.documents.length;
                while (i++ < l)
                {
                    if (this.documents[i].id == id) return this.documents[i];
                }
            }
            return null;
        }

        public getDirectoryById(id: number): DCLibraryDirectory
        {
            if (this.directories.length > 0)
            {
                var i: number = -1, l: number = this.directories.length;
                while (i++ < l)
                {
                    if (this.directories[i].id == id) return this.directories[i];
                }
            }
            return null;
        }

        public sort(): void
        {
            this.directories.sort(this.compareItem);
            this.documents.sort(this.compareItem);
        }

        private compareItem(a: any, b: any): number
        {
            if (a.index != undefined && b.index != undefined)
            {
                if (a.index < b.index) return -1;
                if (a.index > b.index) return 1;
                return 0;
            }
            else
            {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }
            //return 0;
        }

        public get id(): number { return this._id; }
        public get index(): number { return this._index; }
        public get name(): string { return this._name; }
        public get isProtected(): boolean { return this._protected; }
        public get numDocuments(): number { return this.documents.length; }
        public get numDirectories(): number { return this.directories.length; }

        public static fromJson(json: any): DCLibraryDirectory
        {
            var directory: DCLibraryDirectory = new DCLibraryDirectory(parseInt(json.id), json.index != undefined ? parseInt(json.index) : undefined, json.name, json.protected);

            var documentsJson: Array<any> = json.document;
            var directoriesJson: Array<any> = json.documents;
            var i: number;

            if (documentsJson != undefined)
            {
                for (i = 0; i < documentsJson.length; i++)
                {
                    directory.addDocument(DCLibraryDocument.fromJson(documentsJson[i]));
                }
            }

            if (directoriesJson != undefined)
            {
                for (i = 0; i < directoriesJson.length; i++)
                {
                    directory.addDirectory(DCLibraryDirectory.fromJson(directoriesJson[i]));
                }
            }

            directory.sort();

            return directory;
        }
    }
}