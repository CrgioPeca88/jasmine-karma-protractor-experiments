// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { HomeComponent } from './components/root/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticatedGuard } from '@cs-core/guards/authenticated.guard';

const routes: Routes = [{
	path: '',
	component: HomeComponent,
	canActivate: [AuthenticatedGuard],
	children: [{
		path: '',
		canActivateChild: [AuthenticatedGuard],
		children: [
			{ path: '', component: DashboardComponent},
		]
	}]
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule { }
