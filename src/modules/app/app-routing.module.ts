// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { Page404Component } from './components/page404/page404.component';
import { AuthenticatedGuard } from '@cs-core/guards/authenticated.guard';

const routes: Routes = [{
	path: 'home',
	loadChildren: () => import('@modules/home/home.module').then(modules => modules.HomeModule)
}, {
	path: 'login',
	loadChildren: () => import('@modules/auth/auth.module').then(modules => modules.AuthModule)
}, {
	path: 'administracion',
	loadChildren: () => import('@modules/administration/administration.module').then(modules => modules.AdministrationModule)
}, {
	path: 'menu3',
	loadChildren: () => import('@modules/menu3/menu3.module').then(modules => modules.Menu3Module)
}, {
	path: 'vehicles',
	loadChildren: () => import('@modules/vehicles/vehicles.module').then(modules => modules.VehiclesModule)
}, {
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
}, {
	path: '**',
	component: Page404Component
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
