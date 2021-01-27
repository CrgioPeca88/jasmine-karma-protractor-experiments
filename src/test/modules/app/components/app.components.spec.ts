// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Assests
import { Page404Component } from '@modules/app/components/page404/page404.component';
import { AppComponent } from '@modules/app/components/root/app.component';
import { AppRoutingModule } from '@modules/app/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import appComponentTests from './root/root.component.spec';
import page404ComponentTests from './page404/page404.component.spec';

describe('*[AppModule]: ----------------------------------------------', () => {

	beforeEach(async(() => {
	  TestBed.configureTestingModule({
	    imports: [
       SharedModule,
       AppRoutingModule,
       RouterTestingModule
	    ],
	    declarations: [
        Page404Component,
        AppComponent
	    ],
	  }).compileComponents();
	}));

	appComponentTests();
	page404ComponentTests();

});
