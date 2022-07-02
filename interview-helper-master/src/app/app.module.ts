import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { UICarouselModule } from "ui-carousel"; 
import { Ng2CompleterModule } from "ng2-completer"; 

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { TopicListComponent } from './components/topic/topic-list/topic-list.component';
import { TopicSearchComponent } from './components/topic/topic-search/topic-search.component';
import { ArticleSearchComponent } from './components/articles/article-search/article-search.component';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'; 

import { DashboardService } from './services/dashboard.service';
import { TopicService } from './services/topic.service';
import { ArticleService } from './services/article.service';
import { FilterService } from './services/filter-text.service';
import { PagerService } from './services/pager.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		HttpClientModule, 
		ComponentsModule,
		RouterModule,
		AppRoutingModule,
		BlockUIModule.forRoot(),
		UICarouselModule,	 
		MaterialModule,
		ReactiveFormsModule
		// AgmCoreModule.forRoot({
		//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
		// })
	],
	declarations: [
		AppComponent,
		AdminLayoutComponent,
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
		ArticleSearchComponent,
		LoginComponent
	],
	providers: [
		DashboardService,
		TopicService,
		FilterService,
		ArticleService,
		PagerService,		
		AuthGuard,
		//AlertService,
		AuthenticationService,
		// UserService,
		// { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		// { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

		// // provider used to create fake backend
		// fakeBackendProvider		 
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
