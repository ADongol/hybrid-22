module daikincity.ui.application.communications
{
    export class DCCommunicationsCenterApplication extends DCScreen
    {
        private core: daikincity.DCCore;
        private videoButtons: Array<HTMLButtonElement>;
        private populated: boolean = false;

        constructor()
        {
            super(document.getElementById("communicationsCenter"));
            this.videoButtons = [];
            this.core = daikincity.DCCore.I;
        }

        public show(): void
        {
            this.populate();
            $(this.screenElement).addClass("communications-center")
            $(this.screenElement).hide();
            $(this.screenElement).fadeIn(500);
            super.show();
        }

        private populate(): void
        {
            if (this.populated == true) return;

            var btnLocations: Array<Array<number>> =
                [
                    [21.4, 18.2],
                    [41.4, 18.2],
                    [61.4, 18.2],
                    [21.4, 38.25],
                    [41.4, 38.25],
                    [61.4, 38.25]
                ];

            for (var i: number = 0; i < this.core.numCommunicationsVideos; i++)
            {
                var commsVideo: daikincity.building.communications.DCCommunicationsVideo = this.core.getCommunicationsVideoAt(i);
                var btn: HTMLButtonElement = document.createElement("button");
                btn.id = commsVideo.id.toString();
                $(btn).addClass("communications-btn");

                var img: HTMLImageElement = document.createElement("img");
                img.src = commsVideo.thumbnail;
                btn.appendChild(img);

                btn.onclick = (e) => this.onButtonSelected(e);
                this.screenElement.appendChild(btn);
                btn.style.left = btnLocations[i][0].toString() + "%";
                btn.style.top = btnLocations[i][1].toString() + "%";
            }

            this.populated = true;
        }

        private onButtonSelected(e: MouseEvent): void
        {
            var btn: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;
            var commsVideo: daikincity.building.communications.DCCommunicationsVideo = this.core.getCommunicationsVideoById(parseInt(btn.id));

            if (commsVideo.url.match(/^[a-zA-Z0-9-_]{11}$/) != null)
            {
                this.showVideo(commsVideo);
            }
            else if (commsVideo.url.toLowerCase().indexOf("contact") != -1)
            {
                openContactForm();
            }
            else
            {
                // normal weblink
                window.open(commsVideo.url, "_blank");
            }
        }

        public showVideo(commsVideo: daikincity.building.communications.DCCommunicationsVideo): void
        {
            var div: HTMLDivElement = document.createElement("div");
            $(div).addClass("youtube-container");

            var closeBtn: HTMLButtonElement = document.createElement("button");
            $(closeBtn).addClass("youtube-close-btn");
            div.appendChild(closeBtn);

            var youtubeVideo: HTMLDivElement = document.createElement("div");
            $(youtubeVideo).addClass("youtube-video");
            youtubeVideo.innerHTML = '<iframe width="100%" height="98%" src="//www.youtube.com/embed/' + commsVideo.url + '?rel=0&modestbranding=1&vq=hd720" frameborder="0" allowfullscreen></iframe>';
            div.appendChild(youtubeVideo);

            this.core.lightbox.bestFitRect.width = this.core.lightbox.maxSizeRect.width = 660;
            this.core.lightbox.maxSizeRect.height = this.core.lightbox.maxSizeRect.height = 450;

            this.core.lightbox.show(div, true);
        }
    }
}