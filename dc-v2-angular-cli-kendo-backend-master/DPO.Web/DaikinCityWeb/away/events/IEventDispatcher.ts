/**
 *  NOTE thsi was added by ben not away 3d class
 */
module away.events
{

    export interface IEventDispatcher 
    {
        addEventListener(type: string, listener: Function, target: Object);
        removeEventListener(type: string, listener: Function, target: Object);
        dispatchEvent(event: Event);
        hasEventListener(type: string, listener: Function, target: Object): boolean
    }
}