module com.wearesmartcookie.widgets.circular
{
    export class SCCircularWidget
    {
        public context: CanvasRenderingContext2D;
        public bgColor: string = "#2E3641";
        public startAngle: number = Math.PI * 0.7;
        public sliceAngle: number = Math.PI * 0.4;
        public animationSpeed: number = Math.PI / 100;
        private animationComplete: boolean = true;
        private currentColor: string;
        private targetColor: string;
        private _value: number = 1;

        private layers: Array<SCCircularWidgetLayer>;
        private currentLayer: SCCircularWidgetLayer = null;

        constructor(context: CanvasRenderingContext2D)
        {
            this.context = context;
            this.layers = [];
        }

        public addLayer(layer: SCCircularWidgetLayer): number
        {
            return this.layers.push(layer);
        }

        public draw(): void
        {
            for(var i: number = 0; i < this.layers.length; i++)
            {
                this.layers[i].animationValue = 0;
            }
            this.animationComplete = false;
            requestAnimationFrame(() => this.update());
        }

        private update(): void
        {
            this.context.fillStyle = this.bgColor;
            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

            var i: number, j: number, x: number, y: number, sliceAngle: number, startAngle: number, endAngle: number, angleInc: number, nextAngle: number;
            var complete: boolean = true;

            for (i = 0; i < this.layers.length; i++)
            {
                this.currentLayer = this.layers[i];

                this.currentColor = this.currentLayer.colorFrom;
                this.targetColor = "#" + SCCircularWidget.colorLerp(this.currentColor, this.currentLayer.colorTo, (this.currentLayer.useWidgetValue ? 1 + this._value : this.currentLayer.value)).toString(16);

                x = this.context.canvas.width * 0.5;
                y = this.context.canvas.height * 0.5;

                sliceAngle = this.sliceAngle;
                startAngle = this.startAngle;
                endAngle = startAngle + ((Math.PI * 2) - sliceAngle) * (this.currentLayer.useWidgetValue ? (1 + this._value) * this.currentLayer.animationValue : this.currentLayer.animationValue);

                angleInc = (endAngle - startAngle) / this.currentLayer.numSegments;
                nextAngle = startAngle + angleInc;

                for (j = 0; j < this.currentLayer.numSegments; j++)
                {
                    this.context.beginPath();
                    this.context.lineCap = "round";
                    this.context.lineWidth = this.currentLayer.strokeSize;
                    this.context.strokeStyle = this.nextGradient(x, y, startAngle, nextAngle, this.currentLayer.radius, j);
                    this.context.arc(x, y, this.currentLayer.radius, startAngle, nextAngle);
                    this.context.stroke();
                    startAngle = nextAngle;
                    nextAngle = startAngle + angleInc;
                }

                this.currentLayer.animationValue += this.animationSpeed;
                if (this.currentLayer.animationValue - this.animationSpeed < 1)
                {
                    complete = false;
                }
            }
            if (!complete)  requestAnimationFrame(() => this.update());
        }

        private nextGradient(x:number, y:number, startAngle:number, nextAngle:number, radius:number, inc:number):any
        {
            if (this.currentLayer.colorFrom.toUpperCase() == this.currentLayer.colorTo.toUpperCase()) return this.currentLayer.colorFrom;

            var grad:CanvasGradient = this.context.createLinearGradient
            (
                x + Math.cos(startAngle) * radius,
                y + Math.sin(startAngle) * radius,
                x + Math.cos(nextAngle) * radius,
                y + Math.sin(nextAngle) * radius
            );

            var nextColor:string = "#" + SCCircularWidget.colorLerp(this.currentColor, this.targetColor, inc / this.currentLayer.numSegments).toString(16);
            grad.addColorStop(0, this.currentColor);
            grad.addColorStop(1, nextColor);
            this.currentColor = nextColor;

            return grad;
        }

        public static colorLerp(fromColor:string, toColor:string, amount:number)
        {
            var fc = this.colorFromHash(fromColor);
            var fc_r = (fc >> 16) & 0xFF;
            var fc_g = (fc >> 8) & 0xFF;
            var fc_b = fc & 0xFF;

            var tc = this.colorFromHash(toColor);
            var tc_r = (tc >> 16) & 0xFF;
            var tc_g = (tc >> 8) & 0xFF;
            var tc_b = tc & 0xFF;

            var c_r = fc_r + (tc_r - fc_r) * amount;
            var c_g = fc_g + (tc_g - fc_g) * amount;
            var c_b = fc_b + (tc_b - fc_b) * amount;

            return (c_r << 16 | c_g << 8 | c_b);
        }

        public static colorFromHash(hash:string):number
        {
            return parseInt(hash.substr(1), 16);
        }

        // energy saving - a negative value
        public get value(): number { return this._value; }
        public set value(v: number)
        {
            this._value = (v>0 ? 0 : v);
        }
    }
} 