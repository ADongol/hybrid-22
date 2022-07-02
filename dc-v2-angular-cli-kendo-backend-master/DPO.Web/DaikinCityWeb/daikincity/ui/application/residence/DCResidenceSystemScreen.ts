module daikincity.ui.application.residence
{
    export class DCResidenceSystemScreen extends daikincity.ui.DCScreen implements IDCResidenceScreen
    {
        public refreshBtn: HTMLButtonElement;
        public nextBtn: HTMLButtonElement;
        public previousBtn: HTMLButtonElement;

        private systemCoolingSlider: Slider;
        private systemHeatingSlider: Slider;
        private typicalACSlider: Slider;
        private typicalHeatingSlider: Slider;

        private systemCoolingValueElement: HTMLParagraphElement;
        private systemHeatingValueElement: HTMLParagraphElement;
        private typicalACValueElement: HTMLParagraphElement;
        private typicalHeatingValueElement: HTMLParagraphElement;

        constructor()
        {
            super(document.getElementById("residenceAboutSystem"));

            this.nextBtn = <HTMLButtonElement>document.getElementById("systemNextBtn");
            this.previousBtn = <HTMLButtonElement>document.getElementById("systemPreviousBtn");
            this.refreshBtn = <HTMLButtonElement>document.getElementById("systemRefreshBtn");

            this.systemCoolingValueElement = <HTMLParagraphElement> document.getElementById("coolingHomeValue");
            this.systemHeatingValueElement = <HTMLParagraphElement> document.getElementById("heatingHomeValue");
            this.typicalACValueElement = <HTMLParagraphElement> document.getElementById("typicalACHomeValue");
            this.typicalHeatingValueElement = <HTMLParagraphElement> document.getElementById("typicalHeatingHomeValue");

            this.systemCoolingSlider = new Slider("systemCoolingSlider");
            this.systemCoolingSlider.highlightElement = document.getElementById("coolHomeHighlight");
            this.systemCoolingSlider.element.addEventListener("change", () => this.onSystemCoolingSliderChanged());

            this.systemHeatingSlider = new Slider("systemHeatingSlider");
            this.systemHeatingSlider.highlightElement = document.getElementById("heatHomeHighlight");
            this.systemHeatingSlider.element.addEventListener("change", () => this.onSystemHeatingSliderChanged());

            this.typicalACSlider = new Slider("typicalACSlider");
            this.typicalACSlider.highlightElement = document.getElementById("typicalACHighlight");
            this.typicalACSlider.element.addEventListener("change", () => this.onTypicalACSliderChanged());

            this.typicalHeatingSlider = new Slider("typicalHeatingSlider");
            this.typicalHeatingSlider.highlightElement = document.getElementById("typicalHeatingHighlight");
            this.typicalHeatingSlider.element.addEventListener("change", () => this.onTypicalHeatingSliderChanged());
        }

        private onSystemCoolingSliderChanged(): void
        {
            this.systemCoolingValueElement.innerHTML = this.systemCoolingSlider.value().toString(); //.toFixed(1);
        }

        private onSystemHeatingSliderChanged(): void
        {
            this.systemHeatingValueElement.innerHTML = this.systemHeatingSlider.value().toString(); //.toFixed(1);
        }

        private onTypicalACSliderChanged(): void
        {
            this.typicalACValueElement.innerHTML = this.typicalACSlider.value().toString(); //.toFixed(1);
        }

        private onTypicalHeatingSliderChanged(): void
        {
            this.typicalHeatingValueElement.innerHTML = this.typicalHeatingSlider.value().toString(); //.toFixed(1);
        }

        public refresh(): void
        {

        }

        public show(): void
        {
            super.show();
            this.systemCoolingSlider.onResize();
            this.systemHeatingSlider.onResize();
            this.typicalACSlider.onResize();
            this.typicalHeatingSlider.onResize();
        }
    }
} 