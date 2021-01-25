// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Assets
import { LoginComponent } from './components/login/login.component';
import { NonAuthenticatedGuard } from '@cs-core/guards/non-authenticated.guard';

const routes: Routes = [{
	path: '',
	component: LoginComponent,
	canActivate: [NonAuthenticatedGuard]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
