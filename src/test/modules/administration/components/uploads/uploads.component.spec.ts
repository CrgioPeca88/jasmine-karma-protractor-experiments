/// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

// Assets
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';
import { UploadsComponent } from '@modules/administration/components/uploads/uploads.component';

export default function() {
	describe('2). UploadsComponent: ', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(UploadsComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('2.1). should create uploads-component', async( () => {
			// Action & Assert
			expect(_component).toBeTruthy();
		}));

		it('2.2). should open the confirm modal and show the success response', async( () => {
			// Action & Assert
			_component.modalTest();
			expect(_component.flag).toEqual(true);
		}));

		it('2.3). should not send the request because the option selected was cancel', async( () => {
			// Arrange
			spyOn(_component.apiFrontFacadeService, 'openDialog').and.returnValue(
				{ afterClosed: () => of(undefined) } as MatDialogRef<AlertDialogComponent>
			);
			// Action & Assert
			_component.modalTest();
			expect(_component.flag).toBe(undefined);
			expect(_component.apiFrontFacadeService.openDialog).toHaveBeenCalled();
		}));

	});
}
