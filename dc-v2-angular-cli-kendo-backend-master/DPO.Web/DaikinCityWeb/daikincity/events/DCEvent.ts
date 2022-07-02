module daikincity.events 
{
    export class DCEvent extends away.events.Event
    {
        public static CORE_READY: string = "coreReady";
        public static LIBRARY_READY: string = "libraryReady";
        public static CONFIG_LOAD_ERROR: string = "configLoadError";

        constructor(type: string)
        {
            super(type);
        }
    }
}