/// Dependencies
import { TestBed, async } from '@angular/core/testing';
// Assets
import { UploadsComponent } from '@modules/administration/components/uploads/uploads.component';

export default function() {
	fdescribe('2). UploadsComponent: ', () => {
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

	});
}
