module com.wearesmartcookie.widgets.circular
{
    export class SCCircularWidgetLayer
    {
        public colorFrom: string;
        public colorTo: string;
        public radius: number;
        public strokeSize: number = 18;
        public numSegments: number = 5;
        public useWidgetValue: boolean;
        public value: number = 1;
        public animate: boolean = false;
        private _animationValue:number = 0;

        constructor(colorFrom: string, colorTo: string, useWidgetValue: boolean = true, value: number = 1, radius:number = 0.75, strokeSize:number = 18, numSegments:number = 5, animate:boolean = true)
        {
            this.colorFrom = colorFrom;
            this.colorTo = colorTo;
            this.useWidgetValue = useWidgetValue;
            this.value = value;
            this.radius = radius;
            this.strokeSize = strokeSize;
            this.numSegments = numSegments;
            this.animate = animate;
        }

        public get animationValue(): number
        {
            return this.animate == true ? this._animationValue : 1;
        }

        public set animationValue(v: number)
        {
            this._animationValue = v;
        }
    }
} 