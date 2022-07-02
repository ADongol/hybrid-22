module daikincity
{
    export class DCCore extends away.events.EventDispatcher
    {
        // city access
        public static ACCESS_LIBRARY: number = 1;
        public static ACCESS_LOGISTICS_CENTER: number = 2;
        public static ACCESS_LIBRARY_OTHER: number = 3;
        public buildingAccess: { [id: number]: boolean } = null;

        public static CONFIG_URL: string = "daikincityweb/json/config.json";
        private static instance: DCCore = null;

        private buildingPaths: Array<string>;
        private currentBuildingLoadIndex: number = 0;
        private billboardPosters: Array<daikincity.billboard.DCBillboardPoster>;

        private systems: Array<system.DCSystem>;
        private communicationsVideos: Array<daikincity.building.communications.DCCommunicationsVideo>;

        private buildings: Array<daikincity.building.DCBuilding>;
        private _currentBuilding: daikincity.building.DCBuilding = null;
        public videoPlayer: com.wearesmartcookie.video.SCVideoPlayer;
        public lightbox: Lightbox;

        public defaultBuildingName: string = "";
        public defaultFloorName: string = "";
        public isDevice: boolean;

        public libraryOtherAccess: boolean = false;

        public welcomeTitle: string = "";
        public welcomeDescription: string = "";

        constructor()
        {
            super();
            if (DCCore.instance != null) throw new Error("DCCore ** Singleton class, one instance only!");
            DCCore.instance = this;

            this.buildingPaths = [];
            this.buildings = [];
            this.billboardPosters = [];
            this.communicationsVideos = [];

            this.systems = [];

            this.isDevice = navigator.userAgent.match(/iP(ad|phone|od)|Android/) != null;

            this.lightbox = new Lightbox(document.getElementById("lightbox"));
            this.videoPlayer = new com.wearesmartcookie.video.SCVideoPlayer("#videoPlayer", "100%", "100%");

            this.buildingAccess = {};
            this.setDefaultAccess();
        }

        public load(): void
        {
            $.ajax(DCCore.CONFIG_URL, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
        }

        private onConfigLoadError(): void
        {
            this.dispatchEvent(new daikincity.events.DCErrorEvent(daikincity.events.DCEvent.CONFIG_LOAD_ERROR, "Error loading config"));
        }

        private onConfigLoaded(json: any): void
        {
            var config: any = json.config;

            var paths: Array<any> = config.buildings.building;
            for (var i: number = 0; i < paths.length; i++)
            {
                this.buildingPaths.push(paths[i].path);
            }

            var billboardPostersJson: Array<any> = config.billboard.poster;
            for (i = 0; i < billboardPostersJson.length; i++)
            {
                this.billboardPosters.push(daikincity.billboard.DCBillboardPoster.fromJson(billboardPostersJson[i]));
            }

            var systemsJson: Array<any> = config.systems.system;
            for (i = 0; i < systemsJson.length; i++)
            {
                this.systems.push(system.DCSystem.fromJson(systemsJson[i]));
            }

            var videosJson: Array<any> = config.communications.videos.video;
            for (i = 0; i < videosJson.length; i++)
            {
                this.communicationsVideos.push(daikincity.building.communications.DCCommunicationsVideo.fromJson(videosJson[i]));
            }

            this.welcomeTitle = config.home.title;
            this.welcomeDescription = config.home.bodytext;

            this.loadNextBuilding();
        }

        private loadNextBuilding(): void
        {
            if (this.currentBuildingLoadIndex >= this.buildingPaths.length)
            {
                this.onAllBuildingsLoaded();
                return;
            }

            $.ajax(this.buildingPaths[this.currentBuildingLoadIndex], { dataType: "json", success: $.proxy(this.onBuildingLoaded, this), error: $.proxy(this.onBuildingLoadError, this) });
        }

        private onBuildingLoaded(json: any): void
        {
            var building: daikincity.building.DCBuilding = daikincity.building.DCBuilding.fromJson(json.building);
            this.buildings.push(building);

            this.currentBuildingLoadIndex++;
            this.loadNextBuilding();
        }

        private onBuildingLoadError(): void
        {
            this.currentBuildingLoadIndex++;
            this.loadNextBuilding();
        }

        private onAllBuildingsLoaded(): void
        {
            $.ajax("Account/DaikinCityAccess", { dataType: "json", type:"POST", success: $.proxy(this.onBuildingAccessLoaded, this), error: $.proxy(this.onBuildingAccessLoadError, this) });
        }

        private onBuildingAccessLoaded(json: any): void
        {
            var i: number;
            for (i = 0; i < this.buildings.length; i++)
            {
                this.buildingAccess[this.buildings[i].id] = true;
            }

            this.setDefaultAccess();

            for (i = 0; i < json.length; i++)
            {
                var id: number = parseInt(json[i].id);
                if (id == 3)
                {
                    this.libraryOtherAccess = true;
                }
                else
                {
                    this.buildingAccess[this.mapAlansIdToBuildingId(id)] = true;
                }
            }

            this.loadCharts();
        }

        private setDefaultAccess(): void
        {
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LIBRARY)] = true;
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LIBRARY_OTHER)] = false;
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LOGISTICS_CENTER)] = false;
        }

        public isBuildingAvailable(buildingId: number): boolean
        {
            if (this.buildingAccess[buildingId] == undefined) return true;
            return this.buildingAccess[buildingId];
        }

        public mapBuildingIdToAlansId(id: number): number
        {
            switch (id)
            {
                case 3:
                    return DCCore.ACCESS_LIBRARY;
                case 12:
                    return DCCore.ACCESS_LOGISTICS_CENTER;
            }
            return id;
        }

        public mapAlansIdToBuildingId(id: number): number
        {
            switch (id)
            {
                case DCCore.ACCESS_LIBRARY:
                    return 3;
                case DCCore.ACCESS_LOGISTICS_CENTER:
                    return 12;
            }
            return id;
        }

        private onBuildingAccessLoadError(): void
        {
            this.loadCharts();
        }

        private loadCharts(): void
        {
            google.load('visualization', '1.0', { 'packages': ['corechart'], callback: () => this.onGoogleVisualisationLoaded() });
        }

        private onGoogleVisualisationLoaded(): void
        {
            this.parseHash();
            this.dispatchEvent(new daikincity.events.DCEvent(daikincity.events.DCEvent.CORE_READY));
        }

        private parseHash(): void
        {
            var hash: string = window.location.hash;
            if (hash.length > 0)
            {
                var matches: string[] = hash.match(/^#([A-Za-z0-9]+)-*([A-Za-z0-9]*)/);
                if (matches != null && matches.length > 0)
                {
                    this.defaultBuildingName = matches[1].toLowerCase();
                    this.defaultFloorName = matches.length > 2 ? matches[2].toLowerCase() : "";
                }
            }
        }

        public getBuildingByHashName(hashName: string): daikincity.building.DCBuilding
        {
            var i: number = this.buildings.length;
            while (i--)
            {
                if (this.buildings[i].hashName == hashName) return this.buildings[i];
            }

            return null;
        }

        public getBuildingById(id: number): daikincity.building.DCBuilding
        {
            var i: number = this.buildings.length;
            while (i--)
            {
                if (this.buildings[i].id == id) return this.buildings[i];
            }
            return null;
        }

        public getBuildingAt(index: number): daikincity.building.DCBuilding
        {
            
            return this.buildings[index];
        }

        public changeBuilding(buildingId: number, playIntro: boolean): void
        {
            this._currentBuilding = this.getBuildingById(buildingId);
            if (this.currentBuilding != null)
            {
                window.location.hash = this._currentBuilding.hashName;
                ga('send', 'pageview', { 'page': "daikincity/" + this._currentBuilding.hashName });
                this.dispatchEvent(new daikincity.events.DCBuildingChangeEvent(daikincity.events.DCBuildingChangeEvent.BUILDING_CHANGED, this.currentBuilding, playIntro));
            }
        }

        public getBillboardPosterAt(index: number): daikincity.billboard.DCBillboardPoster
        {
            return this.billboardPosters[index];
        }

        public getSystemById(id: number)
        {
            var i: number = this.systems.length;
            while (i--)
            {
                if (this.systems[i].id == id) return this.systems[i];
            }

            return null;
        }

        public get currentBuilding(): daikincity.building.DCBuilding
        {
            return this._currentBuilding;
        }

        public getCommunicationsVideoAt(index: number): daikincity.building.communications.DCCommunicationsVideo
        {
            return this.communicationsVideos[index];
        }

        public getCommunicationsVideoById(id: number): daikincity.building.communications.DCCommunicationsVideo
        {
            var i: number = this.communicationsVideos.length;
            while (i--)
            {
                if (this.communicationsVideos[i].id == id) return this.communicationsVideos[i];
            }

            return null;
        }

        public static get I(): DCCore
        {
            if (DCCore.instance != null) return DCCore.instance;
            return new DCCore();
        }

        public get numBuildings(): number { return this.buildings.length; }
        public get numBillboardPosters(): number { return this.billboardPosters.length; }
        public get numCommunicationsVideos(): number { return this.communicationsVideos.length; }
    }
} 