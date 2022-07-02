/// <reference path="../../definitions/definitions.d.ts" />
module daikincity.building
{
    export class DCBuilding
    {
        private _id: number;
        private _type: string;
        private _name: string;
        private _videoIn: string;
        private _videoInPoster: string;
        private floors: Array<DCFloor>;
        public hotspotX: string;
        public hotspotY: string;
        public menuImage: string;

        constructor(id: number, type:string, name: string, videoIn: string, videoInPoster: string, hotspotX: string, hotspotY: string, menuImage:string)
        {
            this._id = id;
            this._type = type;
            this._name = name;
            this._videoIn = videoIn;
            this._videoInPoster = videoInPoster;
            this.hotspotX = hotspotX;
            this.hotspotY = hotspotY;
            this.menuImage = menuImage;
            this.floors = [];
        }

        public addFloor(floor: DCFloor): number
        {
            floor.building = this;
            return this.floors.push(floor);
        }

        public getFloorAt(index: number): DCFloor
        {
            return this.floors[index];
        }

        public getFloorById(id: number): DCFloor
        {
            var i: number = this.floors.length;
            while (i--)
            {
                if (this.floors[i].id == id) return this.floors[i];
            }
            return null;
        }

        public getFloorByHashName(hashName: string): DCFloor
        {
            var i: number = this.floors.length;
            while (i--)
            {
                if (this.floors[i].hashName == hashName) return this.floors[i];
            }
            return null;
        }

        public get hashName(): string
        {
            return this._name.toLowerCase().replace(/\s+/g, "");
        }

        public hasFunctionalFloor(): boolean
        {
            for (var i: number = 0; i < this.floors.length; i++)
            {
                if (this.floors[i].type == DCFloor.TYPE_FUNCTIONAL) return true;
            }
            return false;
        }

        public static fromJson(json: any): DCBuilding
        {
            var id: number = parseInt(json.id);
            var type: string = json.type;
            var name: string = <string> json.name;
            var videoIn: string = <string> json.videoIn;
            var videoInPoster: string = <string> json.videoInPoster;
            var hotspotX: string = <string> json.hotspotX;
            var hotspotY: string = <string> json.hotspotY;
            var menuImage: string = json.menuImage;

            var building: DCBuilding = new DCBuilding(id, type, name, videoIn, videoInPoster, hotspotX, hotspotY, menuImage);

            var floors: Array<any> = json.floors.floor;
            for (var i: number = 0; i < floors.length; i++)
            {
                building.addFloor(daikincity.building.DCFloor.fromJson(floors[i]));
            }

            return building;
        }

        public toString(): string
        {
            return this.name;
        }

        public get id(): number { return this._id; }
        public get type(): string { return this._type; }
        public get name(): string { return this._name; }
        public get videoIn(): string { return this._videoIn; }
        public get videoInPoster(): string { return this._videoInPoster; }
        public get numFloors(): number { return this.floors.length; }
    }
}