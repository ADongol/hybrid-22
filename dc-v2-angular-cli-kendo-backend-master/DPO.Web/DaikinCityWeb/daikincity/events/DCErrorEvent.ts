module daikincity.events 
{
    export class DCErrorEvent extends away.events.Event
    {
        public static CONFIG_LOAD_ERROR: string = "configLoadError";

        public error: string;S

        constructor(type: string, error:string)
        {
            super(type);
            this.error = error;
        }
    }
}