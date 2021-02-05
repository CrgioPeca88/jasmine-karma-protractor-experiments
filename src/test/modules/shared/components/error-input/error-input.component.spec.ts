// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { ErrorInputComponent } from '@shared/components/error-input/error-input.component';

export default function() {
	describe('3). ErrorInputComponent:', () => {

		let _fixture;
		let _errorInputComponent;

		beforeEach(waitForAsync(() => {
			// InitialArrange
			_fixture = TestBed.createComponent(ErrorInputComponent);
			_errorInputComponent = _fixture.debugElement.componentInstance;
		}));

		it('3.1). should create the error-input component', waitForAsync( () => {
			// Action & Assert
			expect(_errorInputComponent).toBeTruthy();
		}));

	});
}
