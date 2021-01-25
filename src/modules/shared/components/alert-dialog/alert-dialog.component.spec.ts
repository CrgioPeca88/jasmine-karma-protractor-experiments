// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { AlertDialogComponent } from './alert-dialog.component';

export default function() {
	describe('1). AlertDialogComponent:', () => {

		let _fixture;
		let _alertDialogComponent;

		beforeEach(async(() => {
			// InitialArrange
			_fixture = TestBed.createComponent(AlertDialogComponent);
			_alertDialogComponent = _fixture.debugElement.componentInstance;
		}));

		it('1.1). should create the alert-dialog component', async( () => {
			// Action & Assert
			expect(_alertDialogComponent).toBeTruthy();
		}));

	});
}
