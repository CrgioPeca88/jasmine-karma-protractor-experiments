// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Assets
import { AdministrationComponent } from './root/administration.component';
import { UploadsComponent } from './uploads/uploads.component';
import { SharedModule } from '@shared/shared.module';
import { AdministrationRoutingModule } from '@administration/administration-routing.module';
import uploadsComponentTests from './uploads/uploads.component.spec';
import administrationComponentTests from './root/administration.component.spec';

describe('*[AdministrationModule]: -----------------------------------', () => {

	beforeEach(async(() => {
			TestBed.configureTestingModule({
					imports : [
						SharedModule,
						AdministrationRoutingModule,
						RouterTestingModule
					],
					declarations: [
						UploadsComponent,
						AdministrationComponent
					]
			}).compileComponents();
	}));

	administrationComponentTests();
	uploadsComponentTests();

});
