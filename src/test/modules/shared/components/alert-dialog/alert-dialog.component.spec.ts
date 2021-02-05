// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';

// Assets
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';

export default function() {
	describe('1). AlertDialogComponent:', () => {

		let _fixture;
		let _alertDialogComponent;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				providers: [{
					provide: MatDialogRef, useValue: []
				}, {
					provide: MAT_DIALOG_DATA, useValue: []
				}]
			}).compileComponents();
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
