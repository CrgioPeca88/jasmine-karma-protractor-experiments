// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { AuthenticatedGuard } from '@cs-core/guards/authenticated.guard';
import { Menu3ModifyComponent } from './components/modify/menu3-modify.component';
import { Menu3AddComponent } from './components/add/menu3-add.component';
import { Menu3ListComponent } from './components/list/menu3-list.component';
import { Menu3Component } from './components/root/menu3.component';

const routes: Routes = [{
	path: '',
	component: Menu3Component,
	canActivate: [AuthenticatedGuard],
	children: [{
		path: '',
		canActivateChild: [AuthenticatedGuard],
		children: [
			{ path: 'agregar', component: Menu3AddComponent },
			{ path: ':menu3Id/modificar', component: Menu3ModifyComponent },
			{ path: '', component: Menu3ListComponent }
		]
	}]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Menu3RoutingModule { }
