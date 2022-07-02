module daikincity.ui.application.residence
{
    export class DCResidenceApplication extends daikincity.ui.DCScreen
    {
        private static RESIDENCE_IMAGE: string = "daikincityweb/images/residence.jpg";

        public static STATE_ABOUT_HOME: string = "aboutHome";
        public static STATE_ABOUT_SYSTEM: string = "aboutSystem";
        public static STATE_RATES: string = "aboutRates";
        public static STATE_SAVINGS: string = "aboutSavings";
        private state: string;

        private homeScreen: DCResidenceHomeScreen;
        private systemScreen: DCResidenceSystemScreen;
        private ratesScreen: DCResidenceRatesScreen;
        private savingsScreen: DCResidenceSavingsScreen;
        private screens: Array<IDCResidenceScreen>;
        private currentScreen: IDCResidenceScreen;
        private indicatorsContainer: HTMLDivElement;

        constructor()
        {
            super(document.getElementById("residenceApplication"));

            this.homeScreen = new DCResidenceHomeScreen();
            this.homeScreen.refreshBtn.onclick = (e) => this.onRefreshButtonClicked(e);
            this.homeScreen.nextBtn.onclick = (e) => this.onNextButtonClicked(e);

            this.systemScreen = new DCResidenceSystemScreen();
            this.systemScreen.refreshBtn.onclick = (e) => this.onRefreshButtonClicked(e);
            this.systemScreen.nextBtn.onclick = (e) => this.onNextButtonClicked(e);
            this.systemScreen.previousBtn.onclick = (e) => this.onPreviousButtonClicked(e);

            this.ratesScreen = new DCResidenceRatesScreen();
            this.ratesScreen.refreshBtn.onclick = (e) => this.onRefreshButtonClicked(e);
            this.ratesScreen.nextBtn.onclick = (e) => this.onNextButtonClicked(e);
            this.ratesScreen.previousBtn.onclick = (e) => this.onPreviousButtonClicked(e);

            this.savingsScreen = new DCResidenceSavingsScreen();
            this.savingsScreen.refreshBtn.onclick = (e) => this.onRefreshButtonClicked(e);
            this.savingsScreen.previousBtn.onclick = (e) => this.onPreviousButtonClicked(e);

            this.screens = [];
            this.screens.push(this.homeScreen);
            this.screens.push(this.systemScreen);
            this.screens.push(this.ratesScreen);
            this.screens.push(this.savingsScreen);

            this.indicatorsContainer = <HTMLDivElement> document.getElementById("residenceIndicatorContainer");

            this.setState(DCResidenceApplication.STATE_ABOUT_HOME);
        }

        public setState(toState: string): void
        {
            this.state = toState;
            this.hideAll();

            switch (this.state)
            {
                case DCResidenceApplication.STATE_ABOUT_HOME:
                    this.currentScreen = this.homeScreen;
                    break;
                case DCResidenceApplication.STATE_ABOUT_SYSTEM:
                    this.currentScreen = this.systemScreen;
                    break;
                case DCResidenceApplication.STATE_RATES:
                    this.currentScreen = this.ratesScreen;
                    break;
                case DCResidenceApplication.STATE_SAVINGS:
                    this.currentScreen = this.savingsScreen;
                    break;
            }

            this.currentScreen.show();
            this.createIndicators();
        }

        private onRefreshButtonClicked(e: MouseEvent): void
        {
            this.currentScreen.refresh();
        }

        private onNextButtonClicked(e: MouseEvent): void
        {
            this.nextScreen();
        }

        private onPreviousButtonClicked(e: MouseEvent): void
        {
            this.previousScreen();
        }

        public nextScreen(): void
        {
            var currentIndex: number = this.screens.indexOf(this.currentScreen);
            this.toScreen(currentIndex + 1);
        }

        public previousScreen(): void
        {
            var currentIndex: number = this.screens.indexOf(this.currentScreen);
            this.toScreen(currentIndex - 1);
        }

        public toScreen(index: number): void
        {
            if (index >= this.screens.length) index = 0;
            else if (index < 0) index = this.screens.length - 1;
            this.currentScreen = this.screens[index];

            this.hideAll();
            this.currentScreen.show();
            this.createIndicators();
        }

        private createIndicators(): void
        {
            this.indicatorsContainer.innerHTML = "";

            for (var i: number = 0; i < this.screens.length; i++)
            {
                var indicator: HTMLDivElement = document.createElement("div");
                $(indicator).addClass("residenceIndicator");
                if (this.screens[i] == this.currentScreen) $(indicator).addClass("residenceIndicatorSelected");
                this.indicatorsContainer.appendChild(indicator);
            }
        }

        public show(): void
        {
            super.show();
            this.setState(DCResidenceApplication.STATE_ABOUT_HOME);
        }

        public hideAll(): void
        {
            for (var i: number = 0; i < this.screens.length; i++)
            {
                this.screens[i].hide();
            }
        }
    }
} 