module daikincity.ui
{
    export class DCSystemIcon
    {
        public static STATE_ON: string = "on";
        public static STATE_OFF: string = "off";
        public static STATE_AVAILABLE: string = "available";
        public static DEFAULT_CLASS: string = "configurationIcon";
        public static DEFAULT_ICON: string = "daikincityweb/images/icons/standard_system.gif";

        private _state: string;

        private _system: system.DCSystem;
        private _layout: daikincity.building.functional.DCFunctionalConfigurationLayout;
        public element: HTMLButtonElement;

        constructor(system: system.DCSystem, layout:daikincity.building.functional.DCFunctionalConfigurationLayout)
        {
            this._system = system
            this._layout = layout;

            this.element = document.createElement("button");

            if (this._system != null)
            {
                this.element.id = this._system.id.toString();
                this.element.style.backgroundImage = "url(" + this._system.icon + ")";
            }
            else
            {
                this.element.style.backgroundImage = "url(" + DCSystemIcon.DEFAULT_ICON + ")";
            }
            this.setState(DCSystemIcon.STATE_OFF);
        }

        public setState(toState: string): void
        {
            this._state = toState;

            var className: string = "";

            switch (this._state)
            {
                case DCSystemIcon.STATE_OFF:
                    className = "configurationIconOff";
                    break;
                case DCSystemIcon.STATE_ON:
                    className = "configurationIconOn";
                    break;
                case DCSystemIcon.STATE_AVAILABLE:
                    className = "configurationIconAvailable";
                    break;
            }

            this.element.className = "";

            $(this.element).addClass(DCSystemIcon.DEFAULT_CLASS);
            $(this.element).addClass(className);

        }

        public get state(): string { return this._state; }
        public get system(): system.DCSystem { return this._system; }
        public get layout(): daikincity.building.functional.DCFunctionalConfigurationLayout { return this._layout; }
    }
}