declare class Slider
{
    constructor(id: string);
    value(): number;
    setValue(v: number): void;
    onResize(): void;
    element: HTMLElement;
    highlightElement: HTMLElement;
}