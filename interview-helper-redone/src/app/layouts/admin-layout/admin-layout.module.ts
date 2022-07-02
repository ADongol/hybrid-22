import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Ng2CompleterModule } from "ng2-completer"; 
import { BlockUIModule } from 'ng-block-ui'; 
import { UICarouselModule } from "ui-carousel";

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ContactListComponent } from '../../components/contact-list/contact-list.component';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IconsComponent } from '../../components/icons/icons.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { UpgradeComponent } from '../../components/upgrade/upgrade.component';
import { TopicListComponent } from '../../components/topic/topic-list/topic-list.component';
import { TopicSearchComponent } from '../../components/topic/topic-search/topic-search.component';
import { ArticleSearchComponent } from '../../components/articles/article-search/article-search.component';

import { DashboardService } from '../../services/dashboard.service';
import { TopicService } from '../../services/topic.service';
import { ArticleService } from '../../services/article.service';
import { FilterService } from '../../services/filter-text.service';
import { PagerService } from '../../services/pager.service';

import { 
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatRippleModule,
  MatNativeDateModule,
  //MatMomentDateModule
} from '@angular/material';

// import { DatePickerModule} from 'angular-material-datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, 
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatListModule, 
    HttpModule,
    HttpClientModule,
    Ng2CompleterModule,
    UICarouselModule,
    BlockUIModule.forRoot()
    // DatePickerModule
    //MatMomentDateModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ContactListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TopicListComponent,
    TopicSearchComponent,
    ArticleSearchComponent
  ],
  providers: [
    DashboardService,
    TopicService,
    FilterService,
    ArticleService, 
    PagerService
  ]  
})

export class AdminLayoutModule {}
