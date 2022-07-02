module com.wearesmartcookie.video 
{
	/**
	 * ...
	 * @author ben.fryer@mediastation.co.uk
	 */
    export class SCVideoPlayerEvent extends away.events.Event 
	{
        public static READY: string = "ready";
        public static COMPLETE: string = "complete";
        public static PLAYING: string = "playing";

        constructor(type: string, bubbles: boolean = false, cancelable: boolean = false)
        {
            super(type);
        }
	}
}