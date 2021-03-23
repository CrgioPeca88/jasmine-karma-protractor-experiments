// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Assets
import menu3ServiceTests from './services/api-back/menu3.service.spec';

describe('*[SharedModule - services]: -------------------------------------------', () => {

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
        HttpClientTestingModule
			]
		}).compileComponents();
	}));

  menu3ServiceTests();

});
