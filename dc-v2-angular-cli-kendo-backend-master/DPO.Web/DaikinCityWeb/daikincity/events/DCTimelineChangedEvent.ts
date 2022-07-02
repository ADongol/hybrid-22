module daikincity.events 
{
    export class DCTimelineChangedEvent extends away.events.Event
    {
        public static TIMELINE_CHANGED: string = "timelineChanged";

        public value: number;

        constructor(type: string, value: number)
        {
            super(type);
            this.value = value;
        }
    }
} 