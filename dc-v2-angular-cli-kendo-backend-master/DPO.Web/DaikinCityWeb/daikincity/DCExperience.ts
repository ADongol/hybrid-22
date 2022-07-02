module daikincity
{
    export function trace(...params: any[]): void
    {
        for (var i: number = 0; i < params.length; i++)
        {
            console.log(params[i]);
        }
    }

    export class DCExperience 
    {
        public static SCREEN_MENU: string = "screenMenu";
        public static SCREEN_BUILDING: string = "screenBuilding";

        public screenMenu: ui.DCMenuScreen;
        public screenBuilding: ui.DCBuildingScreen;
        private screens: Array<daikincity.ui.DCScreen>;
        private currentScreen: daikincity.ui.DCScreen;

        private core: daikincity.DCCore;

        private homeBtn: HTMLAnchorElement;
        private logoBtn: HTMLAnchorElement;
        private lightbox: Lightbox;
        private loadingScreen: HTMLDivElement;

        constructor()
        {
            this.core = daikincity.DCCore.I;

            this.screens = [];

            this.screenMenu = new daikincity.ui.DCMenuScreen();
            this.screens.push(this.screenMenu);
            this.screenMenu.hide();

            this.screenBuilding = new daikincity.ui.DCBuildingScreen();
            this.screens.push(this.screenBuilding);
            this.screenBuilding.hide();

            this.homeBtn = <HTMLAnchorElement> document.getElementById("daikin_city_btn");
            $(this.homeBtn).on("click touchend", $.proxy(this.onHomeBtnClicked, this));

            this.logoBtn = <HTMLAnchorElement> document.getElementById("home_btn");
            $(this.logoBtn).on("click touchend", $.proxy(this.onHomeBtnClicked, this));

            this.loadingScreen = <HTMLDivElement> document.getElementById("loadingScreen");

            window.addEventListener("resize", () => this.resize(), false);
            this.resize();

            this.core.addEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.addEventListener(daikincity.events.DCEvent.CORE_READY, this.onCoreReady, this);
            this.core.load();
        }

        private onCoreLoadError(e: daikincity.events.DCErrorEvent): void
        {
            this.core.removeEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.removeEventListener(away.events.Event.COMPLETE, this.onCoreReady, this);

            alert("Error: " + e.error);
        }

        private onCoreReady(e: daikincity.events.DCEvent): void
        {
            this.core.removeEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.removeEventListener(away.events.Event.COMPLETE, this.onCoreReady, this);

            this.screenMenu.populate();
            this.parseTopBuildingMenu();

            this.core.addEventListener(daikincity.events.DCBuildingChangeEvent.BUILDING_CHANGED, this.onBuildingChanged, this);

            if (this.core.defaultBuildingName.length)
            {
                var building: daikincity.building.DCBuilding = this.core.getBuildingByHashName(this.core.defaultBuildingName);
                this.core.defaultBuildingName = ""; // reset once used
                if (building != null)
                {
                    this.loadingScreen.style.display = "none";
                    this.core.changeBuilding(building.id, false);
                }
                else
                {
                    // ignore building on error
                    this.playFlydown();

                    //========skip video==============

                    //this.core.videoPlayer.hide();

                    this.onFlydownVideoComplete(null);
                    
                }
            }
            else
            {
                this.playFlydown();

                //========skip video==============

                //this.core.videoPlayer.hide();

                this.onFlydownVideoComplete(null);
               
            }
        }

        private parseTopBuildingMenu(): void
        {
            for (var i: number = 0; i < this.core.numBuildings; i++)
            {
                var a: HTMLAnchorElement = <HTMLAnchorElement> document.getElementById("building_" + this.core.getBuildingAt(i).id.toString());
                if (a != undefined)
                {
                    a.onclick = (e) => this.onTopMenuBuildingSelected(e);
                }
            }
        }

        private onTopMenuBuildingSelected(e: MouseEvent): void
        {
            var a: HTMLAnchorElement = <HTMLAnchorElement>e.currentTarget;
            var id: number = parseInt(a.id.substr(a.id.indexOf("_") + 1));
            if (!isNaN(id))
            {
                this.core.changeBuilding(id, false);
            }
        }

        private onHomeBtnClicked(e: MouseEvent): void
        {
            this.core.videoPlayer.hide();
            this.onFlydownVideoComplete(null);
            e.preventDefault();
        }

        private playFlydown(): void
        {
            if (!this.core.isDevice)
            {
                this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onFlydownVideoComplete, this);
                this.core.videoPlayer.play("daikincityweb/video/Flydown.mp4", "daikincityweb/images/flydown_poster.jpg");
                this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onFlydownPlaying, this);
            }
            else
            {
                this.loadingScreen.style.display = "none";
                this.changeScreen(DCExperience.SCREEN_MENU);
            }
        }

        private onFlydownPlaying(e: com.wearesmartcookie.video.SCVideoPlayerEvent): void
        {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onFlydownPlaying, this);
            this.loadingScreen.style.display = "none";
        }

        private onFlydownVideoComplete(e: com.wearesmartcookie.video.SCVideoPlayerEvent): void
        {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onFlydownVideoComplete, this);
            this.changeScreen(DCExperience.SCREEN_MENU);
        }

        private onBuildingChanged(e: daikincity.events.DCBuildingChangeEvent): void
        {
            if (this.core.buildingAccess[e.building.id] != true)
            {
                this.changeScreen(DCExperience.SCREEN_MENU);
                return;
            }

            //if (e.playIntro)
            //{
            //    this.playBuildingFlydown();
            //}
            //else
            //{
            //    this.showBuilding();
            //}

            //========skip video==============
            this.showBuilding();
        }

        private playBuildingFlydown(): void
        {
            this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onBuildingFlydownPlaying, this);
            this.core.videoPlayer.play(this.core.currentBuilding.videoIn, this.core.currentBuilding.videoInPoster);
            this.core.videoPlayer.show();
            document.getElementById("videoPlayer").style.zIndex = "10";
        }

        private onBuildingFlydownPlaying(e: com.wearesmartcookie.video.SCVideoPlayerEvent): void
        {
            this.hideAll();
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onBuildingFlydownPlaying, this);
        }

        private onBuildingFlydownVideoComplete(e: com.wearesmartcookie.video.SCVideoPlayerEvent): void
        {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.showBuilding();
        }

        public showBuilding(): void
        {
            this.changeScreen(DCExperience.SCREEN_BUILDING);
        }

        public changeScreen(toScreen: string): void
        {
            var screen: daikincity.ui.DCScreen = null;

            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.core.lightbox.hide();

            switch (toScreen)
            {
                case DCExperience.SCREEN_MENU:
                    screen = this.screenMenu;
                    window.location.hash = "";
                    ga('send', 'pageview', { 'page': "daikincity" });
                    break;
                case DCExperience.SCREEN_BUILDING:
                    this.core.videoPlayer.stop();
                    screen = this.screenBuilding;
                    screen.addEventListener("ready", this.onBuildingReady, this);
                    break;
            }

            if (screen != null)
            {
                this.showScreen(screen);
            }
        }

        private onBuildingReady(e): void
        {
            this.currentScreen.removeEventListener("ready", this.onBuildingReady, this);
            setTimeout(() => this.core.videoPlayer.hide(), 50);
            document.getElementById("videoPlayer").style.zIndex = "0";
        }

        private showScreen(screen: daikincity.ui.DCScreen): void
        {
            this.currentScreen = screen;
            this.hideAll();
            this.currentScreen.show();
        }

        private hideAll(): void
        {
            for (var i: number = 0; i < this.screens.length; i++)
            {
                this.screens[i].hide();
            }
        }

        private resize()
        {
            var header: HTMLDivElement = <HTMLDivElement> document.getElementById("header");
            var content: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

            var toFit: away.geom.Rectangle = new away.geom.Rectangle(0, 0, 1280, 720);
            var ww: number = document.body.offsetWidth - 60;
            var wh: number = document.body.offsetHeight - 55 - 60; // minus header height and 30px margin on wrapper
            var fit: away.geom.Rectangle = this.bestFit(toFit, new away.geom.Rectangle(0, 0, ww, wh));

            var minWidth: number = 964;

            if (fit.width < minWidth)
            {
                fit.width = minWidth;
                fit.height = 542;
            }

            content.style.width = fit.width + "px";
            content.style.height = fit.height + "px";

            // video element - required for ie9 correct dimensions
            this.core.videoPlayer.resize(content.offsetWidth + "px", content.offsetHeight + "px");

            // font sizing
            var s: number = window.innerWidth / 1280;
            if (s < minWidth / 1280) s = minWidth / 1280;
            document.body.style.fontSize = (s * 62.5) + "%";

            // align header buttons to right of app
            var headerBtns: HTMLDivElement = <HTMLDivElement> document.getElementById("headerBtns");
            headerBtns.style.right = document.body.offsetWidth - ((content.offsetLeft + content.offsetWidth)) + "px";

            if (this.logoBtn != undefined)
            {
                this.logoBtn.style.left = content.offsetLeft + "px";
            }
        }

        private bestFit(toFit, bounds): away.geom.Rectangle
        {
            var s: number = Math.min(bounds.width / toFit.width, bounds.height / toFit.height);
            return new away.geom.Rectangle(0, 0, toFit.width * s, toFit.height * s);
        }
    }
}