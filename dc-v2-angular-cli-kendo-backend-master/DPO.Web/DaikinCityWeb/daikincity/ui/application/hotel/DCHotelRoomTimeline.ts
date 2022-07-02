module daikincity.ui.application.hotel
{
    export class DCHotelRoomTimeline extends away.events.EventDispatcher
    {
        private element: HTMLDivElement;
        private handle: HTMLDivElement;
        private handleText: HTMLParagraphElement;
        private timelineContainer: HTMLDivElement;
        private sliderImg: HTMLImageElement;
        public dragging: boolean = false;
        public animating: boolean = false;
        private mouseX: number = 0;
        private px: number = 0;
        private _value: number = 0;
        private prevValue: number = 0;

        private animDuration: number = 25;
        private currentAnimStep: number = 0;
        private timeTo: number = 0;
        private timeStart: number = 0;

        constructor()
        {
            super();
            this.element = <HTMLDivElement> document.getElementById("hotelRoomTimeline");
            this.handle = <HTMLDivElement> document.getElementById("timeline-handle");
            this.handleText = <HTMLParagraphElement> document.getElementById("handleText");
            this.timelineContainer = <HTMLDivElement> document.getElementById("timeline");
            this.sliderImg = <HTMLImageElement> document.getElementById("timeline-slider");
        }

        public addListeners(): void
        {
            this.handle.addEventListener("touchstart", (e: MouseEvent) => this.onHandleMouseDown(e));
            document.body.addEventListener("touchmove", (e: MouseEvent) => this.onBodyMouseMove(e));
            document.body.addEventListener("touchend", (e: MouseEvent) => this.onBodyMouseUp(e));

            this.handle.addEventListener("mousedown", (e: MouseEvent) => this.onHandleMouseDown(e));
            document.body.addEventListener("mousemove", (e: MouseEvent) => this.onBodyMouseMove(e));
            document.body.addEventListener("mouseup", (e: MouseEvent) => this.onBodyMouseUp(e));
            document.body.addEventListener("mouseleave", (e: MouseEvent) => this.onBodyMouseUp(e));

            window.requestAnimationFrame(() => this.update());
        }

        public removeListeners(): void
        {
            this.handle.removeEventListener("touchstart", (e: MouseEvent) => this.onHandleMouseDown(e));
            document.body.removeEventListener("touchmove", (e: MouseEvent) => this.onBodyMouseMove(e));
            document.body.removeEventListener("touchend", (e: MouseEvent) => this.onBodyMouseUp(e));

            this.handle.removeEventListener("mousedown", (e: MouseEvent) => this.onHandleMouseDown(e));
            document.body.removeEventListener("mousemove", (e: MouseEvent) => this.onBodyMouseMove(e));
            document.body.removeEventListener("mouseup", (e: MouseEvent) => this.onBodyMouseUp(e));
            document.body.removeEventListener("mouseleave", (e: MouseEvent) => this.onBodyMouseUp(e));
        }

        private onHandleMouseDown(e: MouseEvent): boolean
        {
            this.dragging = true;
            e.preventDefault();
            return false;
        }

        private onBodyMouseUp(e: MouseEvent): void
        {
            this.dragging = false;
        }

        private onBodyMouseMove(e: MouseEvent): boolean
        {
            this.mouseX = e.pageX;
            //e.preventDefault();
            return false;
        }

        public animateTo(time: number): void
        {
            if (this._value == time) return;
            this.currentAnimStep = 0;
            this.timeStart = this._value;
            this.timeTo = time - this.timeStart;
            this.animating = true;
        }

        private update(): void
        {
            var r: ClientRect = this.sliderImg.getBoundingClientRect();
            if (r.width == 0 && r.height == 0)
            {
                // break out when not visible
                this.removeListeners();
                return;
            }
            if (this.dragging)
            {
                this.px = this.mouseX - r.left;
                if (this.px < 0) this.px = 0;
                if (this.px > r.width) this.px = r.width;
                this.value = this.px / r.width;
            }
            else if (this.animating)
            {
                this.value = this.timeStart + (this.timeTo * (this.currentAnimStep / this.animDuration));

                this.currentAnimStep++;
                if (this.currentAnimStep > this.animDuration)
                {
                    this.animating = false;
                }
            }

            var x: number = this.sliderImg.offsetLeft + ((this._value * this.sliderImg.offsetWidth) - this.handle.offsetWidth * 0.5);
            this.setHandleX(x);
            this.handle.style.top = (((this.timelineContainer.offsetHeight - this.handle.offsetHeight) * 0.5) + 18) + "px";
            this.handleText.innerHTML = this.currentTime(30, false);

            window.requestAnimationFrame(() => this.update());
        }

        private setHandleX(x: number): void
        {
            this.handle.style.left = x + "px";
        }

        public currentTime(roundMinutes:number = -1, format24Hour:boolean = true): string
        {
            var hours: number = (12 + (this._value * 24)) % 24;
            var mins: number = (hours - Math.floor(hours)) * 60;
            if (roundMinutes > 0)
            {
                mins = Math.round(mins / roundMinutes) * roundMinutes;
                if (mins == 60)
                {
                    mins = 0;
                    if (++hours == 24) hours = 0;
                }
            }

            if (!format24Hour)
            {
                if (hours > 12)
                {
                    hours = ((hours + 11) % 12 + 1);
                }
            }

            var hours_str: string = Math.floor(hours).toString();
            if (hours_str.length == 1) hours_str = "0" + hours_str;

            var mins_str: string = Math.floor(mins).toString();
            if (mins_str.length == 1) mins_str = "0" + mins_str;

            return hours_str + ":" + mins_str;
        }

        public get value(): number { return this._value; }
        public set value(v:number)
        {
            this._value = v;
            if (this.prevValue != this._value)
            {
                this.prevValue = this._value;
                this.dispatchEvent(new daikincity.events.DCTimelineChangedEvent(daikincity.events.DCTimelineChangedEvent.TIMELINE_CHANGED, this._value));
            }
        }
    }
}