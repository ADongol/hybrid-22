import { Component, OnInit  } from '@angular/core';

@Component({
    selector: "redirect-page",
    templateUrl: "./redirect-page.component.html",
    styleUrls:["./redirect-page.component.css"]
})
export class RedirectPageComponent implements OnInit {
    text: string;

    constructor() { }

    ngOnInit() {

        this.text = "Please click below to redirect to right address:"        
    }
};
