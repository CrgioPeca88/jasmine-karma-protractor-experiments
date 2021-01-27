// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { ErrorInputComponent } from '@shared/components/error-input/error-input.component';

export default function() {
	describe('3). ErrorInputComponent:', () => {

		let _fixture;
		let _errorInputComponent;

		beforeEach(async(() => {
			// InitialArrange
			_fixture = TestBed.createComponent(ErrorInputComponent);
			_errorInputComponent = _fixture.debugElement.componentInstance;
		}));

		it('3.1). should create the error-input component', async( () => {
			// Action & Assert
			expect(_errorInputComponent).toBeTruthy();
		}));

	});
}
