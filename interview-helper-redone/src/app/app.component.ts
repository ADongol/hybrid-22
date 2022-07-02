import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
 
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @BlockUI() blockUI: NgBlockUI;

  constructor(private router: Router) {    
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.blockUI.start();
      } else if (event instanceof NavigationEnd) {  

        this.blockUI.stop();
      }
    });
  }
}
