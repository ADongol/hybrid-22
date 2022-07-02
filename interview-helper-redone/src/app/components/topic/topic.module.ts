import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';


//import { LayoutModule } from '../layouts/layout.module'; 
// import { TopicListComponent } from './components/topic-list/topic-list.component';
//import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    //MatCardModule,
    BlockUIModule.forRoot()
    //LayoutModule,
    //RouterModule.forChild(dashboardRoutes),
  ],
//   providers: [...fromServices.services],
  //declarations: [...fromComponents.components],
  //exports: [...fromComponents.components],
})
export class TopicModule {}