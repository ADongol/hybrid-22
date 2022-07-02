module daikincity.ui.application.residence
{
    export class DCResidenceHomeScreen extends daikincity.ui.DCScreen implements IDCResidenceScreen
    {
        private homeSizeSelect: HTMLSelectElement;
        private homeLocationSelect: HTMLSelectElement;
        private homeBuiltSelect: HTMLSelectElement;
        private homeSystemInstalledSelect: HTMLSelectElement;
        private homeSizeSlider: Slider;
        private homeSliderValueElement: HTMLParagraphElement;

        public refreshBtn: HTMLButtonElement;
        public nextBtn: HTMLButtonElement;
        public previousBtn: HTMLButtonElement;

        constructor()
        {
            super(document.getElementById("residenceAboutHome"));

            this.homeSizeSelect = <HTMLSelectElement> document.getElementById("homeSizeSelect");
            this.homeLocationSelect = <HTMLSelectElement> document.getElementById("homeLocationSelect");
            this.homeBuiltSelect = <HTMLSelectElement> document.getElementById("homeBuiltSelect");
            this.homeSystemInstalledSelect = <HTMLSelectElement> document.getElementById("homeSystemInstalledSelect");

            this.nextBtn = <HTMLButtonElement>document.getElementById("homeNextBtn");
            this.refreshBtn = <HTMLButtonElement>document.getElementById("homeRefreshBtn");

            this.homeSliderValueElement = <HTMLParagraphElement> document.getElementById("homeSliderValue");

            this.homeSizeSlider = new Slider("homeSizeSlider");
            this.homeSizeSlider.element.addEventListener("change", () => this.onHomeSizeSliderChanged());
            this.homeSizeSlider.highlightElement = document.getElementById("homeSizeHighlight");
        }

        public refresh(): void
        {

        }

        private onHomeSizeSliderChanged(): void
        {
            this.homeSliderValueElement.innerHTML = this.homeSizeSlider.value().toString();
        }

        public show(): void
        {
            super.show();
            this.homeSizeSlider.onResize();
        }

        public get homeSize(): number
        {
            return parseFloat(this.homeSizeSelect.value);
        }

        public get homeLocation(): string
        {
            return this.homeLocationSelect.value;
        }

        public get homeBuilt(): string
        {
            return this.homeBuiltSelect.value;
        }

        public get homeSystemInstalled(): string
        {
            return this.homeSystemInstalledSelect.value;
        }
    }
} 