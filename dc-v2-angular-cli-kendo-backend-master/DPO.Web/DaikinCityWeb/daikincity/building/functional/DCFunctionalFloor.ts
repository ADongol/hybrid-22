/// <reference path="../DCFloor.ts" />
module daikincity.building.functional
{
    export class DCFunctionalFloor extends DCFloor
    {
        private _size: number;
        private _floorImage: string;
        private configurations: Array<functional.DCFunctionalConfiguration>;
        private alternativeConfigurations: Array<functional.DCFunctionalConfiguration>;

        constructor(id: number, type: string, name: string, size: number, floorImage:string)
        {
            super(id, type, name);
            this._size = size;
            this._floorImage = floorImage;
            this.configurations = [];
            this.alternativeConfigurations = [];
        }

        public addConfiguration(configuration: DCFunctionalConfiguration): number
        {
            return this.configurations.push(configuration);
        }

        public addAlternativeConfiguration(configuration: DCFunctionalConfiguration): number
        {
            return this.alternativeConfigurations.push(configuration);
        }

        public getConfigurationAt(index: number): DCFunctionalConfiguration
        {
            return this.configurations[index];
        }

        public getAlternativeConfigurationAt(index: number): DCFunctionalConfiguration
        {
            return this.alternativeConfigurations[index];
        }

        public getConfigurationById(id: number): DCFunctionalConfiguration
        {
            var i: number = this.configurations.length;
            while (i--)
            {
                if (this.configurations[i].id == id) return this.configurations[i];
            }
            return null;
        }

        public getAlternativeConfigurationById(id: number): DCFunctionalConfiguration
        {
            var i: number = this.alternativeConfigurations.length;
            while (i--)
            {
                if (this.alternativeConfigurations[i].id == id) return this.alternativeConfigurations[i];
            }
            return null;
        }

        public getHighestEnergyValue(): number
        {
            var a: Array<functional.DCFunctionalConfiguration> = this.configurations.concat(this.alternativeConfigurations);
            var i: number = a.length;
            var highest: number = 0;
            while (i--)
            {
                if (a[i].energy > highest) highest = a[i].energy;
            }
            return highest;
        }

        public get size(): number { return this._size; }
        public get floorImage(): string { return this._floorImage; }
        public get numConfigurations(): number { return this.configurations.length; }
        public get numAlternativeConfigurations(): number { return this.alternativeConfigurations.length; }
    }
} 