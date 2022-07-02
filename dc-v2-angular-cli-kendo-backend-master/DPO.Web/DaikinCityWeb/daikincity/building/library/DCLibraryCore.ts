module daikincity.building.library
{
    export class DCLibraryCore extends away.events.EventDispatcher
    {
        public static CONFIG_URL: string = "daikincityweb/json/documents.json";
        private static instance: DCLibraryCore = null;

        private _rootDirectory: DCLibraryDirectory;
        private _loaded: boolean = false;
        public authenticated: boolean = false;

        public directoriesDict: { [id: number]: DCLibraryDirectory };

        constructor()
        {
            super();
            if (DCLibraryCore.instance != null) throw new Error("DCLibraryCore ** Singleton class");
            DCLibraryCore.instance = this;

            this.directoriesDict = { };
        }

        public load(): void
        {
            $.ajax(DCLibraryCore.CONFIG_URL, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
        }

        private onConfigLoadError(): void
        {
            trace("DCLibraryApplication ** Error loading config");
        }

        private onConfigLoaded(json: any): void
        {
            this._rootDirectory = DCLibraryDirectory.fromJson(json.documents);
            this._loaded = true;

            this.authenticated = daikincity.DCCore.I.libraryOtherAccess;
            this.ready();
        }

        private ready(): void
        {
            this.dispatchEvent(new daikincity.events.DCEvent(daikincity.events.DCEvent.LIBRARY_READY));
        }

        public hasParent(child: DCLibraryDirectory, parent: DCLibraryDirectory, excludeRoot:boolean = false): boolean
        {
            if (child.id == parent.id)
            {
                if (!(excludeRoot && parent.id == 1))
                {
                    return true;
                }
            }

            var p: DCLibraryDirectory = child.parentDirectory;
            while (p != null)
            {
                if (p.id == parent.id)
                {
                    if (!(excludeRoot && parent.id == 1))
                    {
                        return true;
                    }
                }
                p = p.parentDirectory;
            }
            return false;
        }

        public static get I(): DCLibraryCore
        {
            if (DCLibraryCore.instance != null) return DCLibraryCore.instance;
            return new DCLibraryCore();
        }

        public get loaded(): boolean { return this._loaded; }
        public get rootDirectory(): DCLibraryDirectory { return this._rootDirectory; }

    }
} 