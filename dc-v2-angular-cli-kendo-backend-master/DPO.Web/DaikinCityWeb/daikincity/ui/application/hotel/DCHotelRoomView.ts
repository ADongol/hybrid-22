module daikincity.ui.application.hotel
{
    export class DCHotelRoomView
    {
        public element: HTMLElement;
        private roomElement: HTMLImageElement;
        private overlayElement: HTMLImageElement;
        private animationElement: HTMLImageElement;

        private currentScenario: DCHotelRoomScenario = null;

        constructor()
        {
            this.element = document.getElementById("hotelRoomView");
            this.roomElement = <HTMLImageElement>document.getElementById("hotelRoomImage");
            this.overlayElement = <HTMLImageElement>document.getElementById("hotelRoomOverlayImage");
            this.animationElement = <HTMLImageElement>document.getElementById("hotelRoomAnimationImage");
        }

        public setScenario(scenario: DCHotelRoomScenario): void
        {
            if (this.currentScenario == scenario) return;

            this.roomElement.src = scenario.roomImage;
            this.overlayElement.src = scenario.overlayImage;
            this.animationElement.src = scenario.animationImage;
            this.currentScenario = scenario;

            this.animationElement.style.visibility = this.currentScenario.animationImage.length > 0 ? "visible" : "hidden";
            this.overlayElement.style.visibility = this.currentScenario.overlayImage.length > 0 ? "visible" : "hidden";
        }
    }
} 