module daikincity.ui
{
    export class DCBillboard 
    {
        public element: HTMLDivElement;
        private posters: Array<HTMLAnchorElement>;
        private currentPosterIndex: number = -1;
        private posterDuration: number = 10000;

        constructor()
        {
            this.element = <HTMLDivElement> document.getElementById("billboard");
            this.posters = [];
            setTimeout(() => this.nextPoster(), this.posterDuration);
        }

        public addPoster(poster: daikincity.billboard.DCBillboardPoster): void
        {
            if (!poster.enabled) return;
            var a: HTMLAnchorElement = document.createElement("a");
            a.target = "_blank";
            $(a).addClass("billboard-poster");
            a.href = poster.url;

            var img: HTMLImageElement = document.createElement("img");
            img.src = poster.image;
            $(img).addClass("full");

            a.appendChild(img);
            this.element.appendChild(a);

            this.posters.push(a);
        }

        public showPoster(index: number): void
        {
            if (this.posters.length == 0) return;

            if (index >= this.posters.length) index = 0;
            else if (index < 0) index = this.posters.length - 1;
            this.currentPosterIndex = index;

            this.hideAll();
            this.posters[this.currentPosterIndex].style.visibility = "visible";
        }

        public hideAll(): void
        {
            for (var i: number = 0; i < this.posters.length; i++)
            {
                this.posters[i].style.visibility = "hidden";
            }
        }

        public nextPoster(): void
        {
            this.showPoster(this.currentPosterIndex + 1);
            setTimeout(() => this.nextPoster(), this.posterDuration);
        }
    }
} 