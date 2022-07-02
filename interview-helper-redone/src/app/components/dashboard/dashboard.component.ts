import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService} from '../../services/dashboard.service';
// import { MatDatepicker} from '@angular/material';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('datepicker') datepicker;
  public myDate = new Date();
  public datex = new Date();
  public articles: any = [];

  constructor(private dashboardSvc: DashboardService) { 
  }
      
   ngOnInit() {
   }    
}
