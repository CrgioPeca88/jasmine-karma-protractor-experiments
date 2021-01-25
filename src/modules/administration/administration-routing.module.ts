// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { AuthenticatedGuard } from '@cs-core/guards/authenticated.guard';
import { AdministrationComponent } from './components/root/administration.component';
import { UploadsComponent } from './components/uploads/uploads.component';

const routes: Routes = [{
	path: '',
	component: AdministrationComponent,
	canActivate: [AuthenticatedGuard],
	children: [{
		path: '',
		canActivateChild: [AuthenticatedGuard],
		children: [
			{ path: 'cargues', component: UploadsComponent},
			{ path: '', redirectTo: '/administracion/cargues', pathMatch: 'full'}
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
export class AdministrationRoutingModule { }
