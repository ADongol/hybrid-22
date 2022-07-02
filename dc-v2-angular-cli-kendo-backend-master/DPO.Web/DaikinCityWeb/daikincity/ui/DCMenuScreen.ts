/// <reference path="DCScreen.ts" />
module daikincity.ui
{
    export class DCMenuScreen extends daikincity.ui.DCScreen
    {
        public static HOTSPOT_FUNCTIONAL_SRC: string = "daikincityweb/images/building-hotspot-functional.png";
        public static HOTSPOT_APPLICATION_SRC: string = "daikincityweb/images/building-hotspot-application.png";

        private bottomMenu: HTMLDivElement;
        private welcomeTitleElement: HTMLHeadingElement;
        private welcomeDescriptionElement: HTMLParagraphElement;
        private functionalBuildingsMenuElement: HTMLUListElement;
        private applicationBuildingsMenuElement: HTMLUListElement;
        private tooltip: HTMLDivElement;
        private billboard: DCBillboard;
        private core: daikincity.DCCore;
        private hotspots: Array<HTMLButtonElement>;

        constructor()
        {
            super(document.getElementById("menuScreen"));

            this.core = daikincity.DCCore.I;
            this.bottomMenu = <HTMLDivElement> document.getElementById("bottomMenuRight");
            this.functionalBuildingsMenuElement = <HTMLUListElement>document.getElementById("functionalBuildingsMenu");
            this.applicationBuildingsMenuElement = <HTMLUListElement>document.getElementById("applicationBuildingsMenu");
            this.welcomeTitleElement = <HTMLHeadingElement> document.getElementById("welcomeTitle");
            this.welcomeDescriptionElement = <HTMLParagraphElement> document.getElementById("welcomeDescription");
            this.billboard = new DCBillboard();
            this.hotspots = [];
            this.createToolTip();
        }

        public populate(): void
        {
            
            for (var i: number = 0; i < this.core.numBuildings; i++)
            {
                var building: daikincity.building.DCBuilding = this.core.getBuildingAt(i);

                if (this.core.isBuildingAvailable(building.id))
                {
                    var listBtn: HTMLLIElement = this.bottomMenuItem(building);
                    if (building.type == daikincity.building.DCFloor.TYPE_FUNCTIONAL)
                    {
                        this.functionalBuildingsMenuElement.appendChild(listBtn);
                    }
                    else
                    {
                        this.applicationBuildingsMenuElement.appendChild(listBtn);
                    }

                    //hotspot
                    var hotspot: HTMLButtonElement = this.hotspot(building);
                    hotspot.onclick = (e) => this.onHotspotButtonSelected(e);
                    this.screenElement.appendChild(hotspot);
                }
            }

            for (i = 0; i < this.core.numBillboardPosters; i++)
            {
                this.billboard.addPoster(this.core.getBillboardPosterAt(i));
            }

            this.welcomeTitleElement.innerHTML = this.core.welcomeTitle;
            this.welcomeDescriptionElement.innerHTML = this.core.welcomeDescription;
        }

        private hotspot(building: daikincity.building.DCBuilding): HTMLButtonElement
        {
            var hotspot: HTMLButtonElement = document.createElement("button");
            hotspot.id = building.id.toString();
            $(hotspot).addClass("menuHotspot");
            hotspot.style.left = building.hotspotX;
            hotspot.style.top = building.hotspotY;
            var hotspotImg: HTMLImageElement = document.createElement("img");
            hotspotImg.src = building.type == daikincity.building.DCFloor.TYPE_FUNCTIONAL ? DCMenuScreen.HOTSPOT_FUNCTIONAL_SRC : DCMenuScreen.HOTSPOT_APPLICATION_SRC;
            hotspot.appendChild(hotspotImg);
            hotspot.onmouseover = (e) => this.onHotspotOver(e);
            hotspot.onmouseout = (e) => this.onHotspotOut(e);
            this.hotspots.push(hotspot);
            return hotspot;
        }

        private bottomMenuItem(building: daikincity.building.DCBuilding): HTMLLIElement
        {
            var li: HTMLLIElement = document.createElement("li");
            var btn: HTMLButtonElement = document.createElement("button");
            var span: HTMLSpanElement = document.createElement("span");

            btn.id = building.id.toString();
            span.innerHTML = building.name;
            btn.appendChild(span);
            li.appendChild(btn);

            //btn.onclick = (e) => this.onBottomMenuButtonSelected(e);
            btn.onmouseover = (e) => this.onMenuItemOver(e);
            btn.onmouseout = (e) => this.onMenuItemOut(e);
            $(btn).on("click touchend", $.proxy(this.onBottomMenuButtonSelected, this));
            return li;
        }

        private createToolTip(): void
        {
            this.tooltip = document.createElement("div");
            $(this.tooltip).addClass("menu-tooltip");
            this.screenElement.appendChild(this.tooltip);
        }

        public showToolTip(building: daikincity.building.DCBuilding): void
        {
            var hotspot: HTMLButtonElement = this.getHotspotById(building.id);
            if (hotspot != null)
            {
                this.tooltip.innerHTML = building.name;
                this.tooltip.style.display = "block";
                this.tooltip.style.left = (hotspot.offsetLeft - (this.tooltip.offsetWidth - hotspot.offsetWidth) * 0.5 - hotspot.offsetWidth * 0.5) + "px";
                this.tooltip.style.top = (hotspot.offsetTop - 35 - (hotspot.offsetHeight * 0.5)) + "px";
            }
        }

        public hideToolTip(): void
        {
            this.tooltip.style.display = "none";
        }

        private getHotspotById(id: number): HTMLButtonElement
        {
            for (var i: number = 0; i < this.hotspots.length; i++)
            {
                if (parseInt(this.hotspots[i].id) == id) return this.hotspots[i];
            }
            return null;
        }

        private onMenuItemOver(e: MouseEvent): void
        {
            var btn: HTMLButtonElement = <HTMLButtonElement>e.currentTarget;
            var building: daikincity.building.DCBuilding = this.core.getBuildingById(parseInt(btn.id));
            if (building != null)
            {
                this.showToolTip(building);
            }
        }

        private onMenuItemOut(e: MouseEvent): void
        {
            this.hideToolTip();
        }

        private onHotspotOver(e: MouseEvent): void
        {
            var hotspot: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;

            var building: daikincity.building.DCBuilding = this.core.getBuildingById(parseInt(hotspot.id));
            if (building != null)
            {
                this.showToolTip(building);
            }
        }

        private onHotspotOut(e: MouseEvent): void
        {
            this.hideToolTip();
        }

        private onBottomMenuButtonSelected(e: MouseEvent): void
        {
            var hotspot: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;
            this.core.changeBuilding(parseInt(hotspot.id), false);
        }

        private onHotspotButtonSelected(e: MouseEvent): void
        {
            var hotspot: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;
            this.core.changeBuilding(parseInt(hotspot.id), true);
        }

        private onVideoLoopComplete(e: com.wearesmartcookie.video.SCVideoPlayerEvent): void
        {
            //this.core.videoPlayer.play("daikincityweb/video/City_Loop.mp4", "daikincityweb/images/city.jpg");
        }

        public show(): void
        {
            /*
            this.core.videoPlayer.show();
            this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onVideoLoopComplete, this);
            this.core.videoPlayer.play("daikincityweb/video/City_Loop.mp4", "daikincityweb/images/city.jpg");
            */
            super.show();
        }

        public hide(): void
        {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onVideoLoopComplete, this);
            super.hide();
        }
    }
} 