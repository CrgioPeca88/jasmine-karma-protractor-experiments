// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Assets
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import loginComponentTests from './login/login.component.spec';

describe('*[AuthModule]: ---------------------------------------------', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AuthRoutingModule,
				ReactiveFormsModule,
				SharedModule
			],
			declarations: [
				LoginComponent
			],
		}).compileComponents();
	}));

	loginComponentTests();

});
