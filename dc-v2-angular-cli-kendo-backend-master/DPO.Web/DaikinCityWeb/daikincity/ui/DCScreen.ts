module daikincity.ui
{
    export class DCScreen extends away.events.EventDispatcher
    {
        public screenElement: HTMLElement;

        constructor(element:HTMLElement)
        {
            super();
            this.screenElement = element;
        }

        public show(): void
        {
            this.screenElement.style.display = "block";
        }

        public hide(): void
        {
            this.screenElement.style.display = "none";
        }

        public get visible(): boolean
        {
            return this.screenElement.style.display == "block";
        }
    }
}