// Dependencies
import { NgModule } from '@angular/core';

// Assets
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		AuthRoutingModule
	],
	declarations: [
		LoginComponent
	]
})
export class AuthModule { }
