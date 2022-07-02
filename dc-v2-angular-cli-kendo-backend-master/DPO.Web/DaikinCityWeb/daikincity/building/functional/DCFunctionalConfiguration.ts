module daikincity.building.functional
{
    export class DCFunctionalConfiguration
    {
        private _id: number;
        private _name: string;
        private _systemName: string;
        private _overlayImage: string;
        private _systemImage: string;
        private _systemType: string;
        private _systemSize: string;
        private _energy: number;
        private _efficiency: number;
        private indoorUnits: Array<number>;
        private layouts: Array<DCFunctionalConfigurationLayout>;

        constructor(id: number, name: string, systemName: string, systemImage: string, systemType: string, systemSize:string, overlayImage: string, energy: number, efficiency: number)
        {
            this._id = id;
            this._name = name;
            this._systemName = systemName;
            this._systemImage = systemImage;
            this._systemType = systemType;
            this._systemSize = systemSize;
            this._overlayImage = overlayImage;
            this._energy = energy;
            this._efficiency = efficiency;

            this.indoorUnits = [];
            this.layouts = [];
        }

        public addIndoorUnit(systemId: number): number
        {
            return this.indoorUnits.push(systemId);
        }

        public addLayout(layout:DCFunctionalConfigurationLayout): number
        {
            return this.layouts.push(layout);
        }

        public getLayoutAt(index: number): DCFunctionalConfigurationLayout
        {
            return this.layouts[index];
        }

        public getLayoutById(id: number): DCFunctionalConfigurationLayout
        {
            var i: number = this.layouts.length;
            while (i--)
            {
                if (this.layouts[i].id == id) return this.layouts[i];
            }
            return null;
        }

        public getIndoorUnitAt(index: number): number
        {
            return this.indoorUnits[index];
        }

        public static fromJson(json:any): DCFunctionalConfiguration
        {
            var id: number = parseInt(json.id);
            var name: string = json.name;
            var systemName: string = json.systemName;
            var systemType: string = json.systemType;
            var systemSize: string = json.systemSize;
            var overlayImage: string = json.overlayImage;
            var systemImage: string = json.systemImage;
            var energy: number = parseFloat(json.energy);
            var efficiency: number = parseFloat(json.efficiency);

            var configuration: DCFunctionalConfiguration = new DCFunctionalConfiguration(id, name, systemName, systemImage, systemType, systemSize, overlayImage, energy, efficiency);
            var i: number;

            if (json.indoorUnits != undefined)
            {
                var indoorUnitsJson: Array<any> = json.indoorUnits.indoorUnit;
                for (i = 0; i < indoorUnitsJson.length; i++)
                {
                    var systemId: number = parseInt(indoorUnitsJson[i]);
                    configuration.addIndoorUnit(systemId);
                }
            }

            if (json.layouts != undefined)
            {
                var layoutsJson: Array<any> = json.layouts.layout;
                for (i = 0; i < layoutsJson.length; i++)
                {
                    configuration.addLayout(DCFunctionalConfigurationLayout.fromJson(layoutsJson[i]));
                }
            }

            return configuration;
        }

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get systemName(): string { return this._systemName; }
        public get overlayImage(): string { return this._overlayImage; }
        public get systemImage(): string { return this._systemImage; }
        public get systemType(): string { return this._systemType; }
        public get systemSize(): string { return this._systemSize; }
        public get energy(): number { return this._energy; }
        public get efficiency(): number { return this._efficiency; }
        public get numLayouts(): number { return this.layouts.length; }
        public get numIndoorUnits(): number { return this.indoorUnits.length; }
    }
} 