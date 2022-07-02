module daikincity.ui.application.residence
{
    export class DCResidenceRatesScreen extends daikincity.ui.DCScreen implements IDCResidenceScreen
    {
        public refreshBtn: HTMLButtonElement;
        public nextBtn: HTMLButtonElement;
        public previousBtn: HTMLButtonElement;

        private electricitySlider: Slider;
        private gasSlider: Slider;
        private oilSlider: Slider;

        private electricityCanvas: HTMLCanvasElement;
        private electricityWidget: com.wearesmartcookie.widgets.circular.SCCircularWidget;
        private rateElectricityValueElement: HTMLParagraphElement;

        private gasCanvas: HTMLCanvasElement;
        private gasWidget: com.wearesmartcookie.widgets.circular.SCCircularWidget;
        private rateGasValueElement: HTMLParagraphElement;

        private oilCanvas: HTMLCanvasElement;
        private oilWidget: com.wearesmartcookie.widgets.circular.SCCircularWidget;
        private rateOilValueElement: HTMLParagraphElement;

        private _electricityValue: number = 0;
        private _gasValue: number = 0;
        private _oilValue: number = 0;

        constructor()
        {
            super(document.getElementById("residenceRates"));

            this.nextBtn = <HTMLButtonElement>document.getElementById("ratesNextBtn");
            this.previousBtn = <HTMLButtonElement>document.getElementById("ratesPreviousBtn");
            this.refreshBtn = <HTMLButtonElement>document.getElementById("ratesRefreshBtn");

            this.electricityCanvas = <HTMLCanvasElement> document.getElementById("rateElectricityCanvas");
            this.rateElectricityValueElement = <HTMLParagraphElement> document.getElementById("rateElectricityValue");
            this.electricityWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(this.electricityCanvas.getContext("2d"));
            //this.electricityWidget.fromColor = "#FFB847";
            //this.electricityWidget.toColor = "#FFB847";
            this.electricityWidget.startAngle = -(Math.PI * 0.5);
            this.electricityWidget.sliceAngle = 0;

            this.gasCanvas = <HTMLCanvasElement> document.getElementById("rateGasCanvas");
            this.rateGasValueElement = <HTMLParagraphElement> document.getElementById("rateGasValue");
            this.gasWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(this.gasCanvas.getContext("2d"));
            //this.gasWidget.fromColor = "#5EC6F1";
           // this.gasWidget.toColor = "#5EC6F1";
            this.gasWidget.startAngle = -(Math.PI * 0.5);
            this.gasWidget.sliceAngle = 0;

            this.oilCanvas = <HTMLCanvasElement> document.getElementById("rateOilCanvas");
            this.rateOilValueElement = <HTMLParagraphElement> document.getElementById("rateOilValue");
            this.oilWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(this.oilCanvas.getContext("2d"));
            //this.oilWidget.fromColor = "#88D86C";
            //this.oilWidget.toColor = "#88D86C";
            this.oilWidget.startAngle = -(Math.PI * 0.5);
            this.oilWidget.sliceAngle = 0;

            this.electricitySlider = new Slider("electricitySlider");
            this.electricitySlider.element.addEventListener("change", () => this.onElectricitySliderChanged());

            this.gasSlider = new Slider("gasSlider");
            this.gasSlider.element.addEventListener("change", () => this.onGasSliderChanged());

            this.oilSlider = new Slider("oilSlider");
            this.oilSlider.element.addEventListener("change", () => this.onOilSliderChanged());
        }

        public refresh(): void
        {

        }

        public show():void
        {
            super.show();
            this.electricitySlider.onResize();
            this.electricitySlider.setValue(this._electricityValue);
            this.electricityWidget.value = this._electricityValue;
            this.electricityWidget.draw();

            this.gasSlider.onResize();
            this.gasSlider.setValue(this._gasValue);
            this.electricityWidget.value = this._gasValue;
            this.electricityWidget.draw();

            this.oilSlider.onResize();
            this.oilSlider.setValue(this._gasValue);
            this.oilWidget.value = this._gasValue;
            this.oilWidget.draw();
        }

        public hide(): void
        {
            super.hide();
        }

        private onElectricitySliderChanged(): void
        {
            this._electricityValue = this.electricitySlider.value();
            this.electricityWidget.value = this._electricityValue;
            this.rateElectricityValueElement.innerHTML = this.electricityValue.toFixed(1);
            this.electricityWidget.draw();
        }

        private onGasSliderChanged(): void
        {
            this._gasValue = this.gasSlider.value();
            this.gasWidget.value = this._gasValue;
            this.rateGasValueElement.innerHTML = this.gasValue.toFixed(1);
            this.gasWidget.draw();
        }

        private onOilSliderChanged(): void
        {
            this._oilValue = this.oilSlider.value();
            this.oilWidget.value = this._oilValue;
            this.rateOilValueElement.innerHTML = this.oilValue.toFixed(1);
            this.oilWidget.draw();
        }

        public get electricityValue(): number { return this._electricityValue * 100; }
        public get gasValue(): number { return this._gasValue; }
        public get oilValue(): number { return this._oilValue; }
    }
} 