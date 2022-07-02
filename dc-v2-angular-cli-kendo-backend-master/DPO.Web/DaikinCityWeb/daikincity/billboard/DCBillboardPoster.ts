module daikincity.billboard
{
    export class DCBillboardPoster
    {
        public url: string;
        public image: string;
        public enabled: boolean;

        constructor(url: string, image: string, enabled:boolean)
        {
            this.url = url;
            this.image = image;
            this.enabled = enabled;
        }

        public static fromJson(json: any): DCBillboardPoster
        {
            return new DCBillboardPoster(json.url, json.image, json.enabled);
        }
    }
} 