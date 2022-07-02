module daikincity.ui.application.residence
{
    export interface IDCResidenceScreen
    {
        refresh(): void;
        show(): void;
        hide(): void;
        nextBtn: HTMLButtonElement;
        refreshBtn: HTMLButtonElement;
        previousBtn: HTMLButtonElement;
    }
} 