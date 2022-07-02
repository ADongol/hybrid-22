declare class Lightbox
{
    constructor(element:HTMLElement);
    show(content:HTMLElement, clickToClose:boolean): void;
    hide(): void;
    bestFit: boolean;
    bestFitRect: { x: number; y: number; width: number; height: number; };
    minSizeRect: { x: number; y: number; width: number; height: number; };
    maxSizeRect: { x: number; y: number; width: number; height: number; };
}