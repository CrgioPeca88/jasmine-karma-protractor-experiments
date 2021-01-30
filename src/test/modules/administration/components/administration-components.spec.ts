// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Assets
import { AdministrationComponent } from '@modules/administration/components/root/administration.component';
import { UploadsComponent } from '@modules/administration/components/uploads/uploads.component';
import { SharedModule } from '@shared/shared.module';
import { AdministrationRoutingModule } from '@administration/administration-routing.module';
import { MaterialService } from '@cs-core/services/api-front/material.service';
import { MaterialMockService } from '@test/shared/core/services/api-front/material-mock.service.spec';
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
					],
					providers: [
						{ provide: MaterialService, useClass: MaterialMockService }
					]
			}).compileComponents();
	}));

	administrationComponentTests();
	uploadsComponentTests();

});
