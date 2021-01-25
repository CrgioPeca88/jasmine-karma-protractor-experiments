// Dependencies
import { NgModule } from '@angular/core';

// Assets
import { HomeComponent } from './components/root/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent,
		DashboardComponent
	]
})
export class HomeModule { }
