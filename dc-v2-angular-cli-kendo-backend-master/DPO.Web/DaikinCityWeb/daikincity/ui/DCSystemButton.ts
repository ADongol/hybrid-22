module daikincity.ui
{
    export class DCSystemButton
    {
        public static STATE_AVAILABLE: string = "available";
        public static STATE_OFF: string = "off";
        public static STATE_ON: string = "on";
        private static DEFAULT_CLASS: string = "systemButton";

        private _state: string;

        private _configurationNode: daikincity.building.functional.DCConfigurationNode;
        public element: HTMLButtonElement;
        private _system: system.DCSystem;

        constructor(configurationNode: daikincity.building.functional.DCConfigurationNode, layoutId:number)
        {
            this._configurationNode = configurationNode;
            this._system = DCCore.I.getSystemById(this._configurationNode.systemId);

            this.element = document.createElement("button");
            this.element.id = (layoutId + "_" + this._configurationNode.systemId).toString();
            $(this.element).addClass(DCSystemButton.DEFAULT_CLASS);

            var switchImage: HTMLDivElement = document.createElement("div");
            switchImage.innerHTML = "&nbsp;";
            $(switchImage).addClass("systemButtonSwitch");
            this.element.appendChild(switchImage);

            var titleSpan: HTMLSpanElement = document.createElement("span");
            titleSpan.innerHTML = this._system.name;
            this.element.appendChild(titleSpan);

            this.setState(DCSystemButton.STATE_OFF);
        }

        public setState(toState: string): void
        {
            this._state = toState;

            var className: string = "";

            switch (this._state)
            {
                case DCSystemButton.STATE_OFF:
                    className = "systemButtonOff";
                    break;
                case DCSystemButton.STATE_ON:
                    className = "systemButtonOn";
                    break;
                case DCSystemButton.STATE_AVAILABLE:
                    className = "systemButtonAvailable";
                    break;
            }

            // clear out class list
            this.element.className = "";

            // add new class
            $(this.element).addClass(DCSystemButton.DEFAULT_CLASS);
            $(this.element).addClass(className);
        }

        public get configurationNode(): daikincity.building.functional.DCConfigurationNode
        {
            return this._configurationNode;
        }

        public get state(): string { return this._state; }
        public get system(): system.DCSystem { return this._system; }
    }
}