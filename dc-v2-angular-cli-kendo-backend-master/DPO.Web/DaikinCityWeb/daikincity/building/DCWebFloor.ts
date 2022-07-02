module daikincity.building
{
    export class DCWebFloor extends DCFloor
    {
        private links: Array<DCWebLink>;
        public backgroundImage: string;
        public icon: string;

        constructor(id: number, type: string, name: string, backgroundImage: string, icon:string)
        {
            super(id, type, name);
            this.backgroundImage = backgroundImage;
            this.icon = icon;
            this.links = [];
        }

        public addWebLink(webLink: DCWebLink): number
        {
            return this.links.push(webLink);
        }

        public getLinkAt(index: number): DCWebLink
        {
            return this.links[index];
        }

        public get numLinks(): number { return this.links.length }
    }
} 