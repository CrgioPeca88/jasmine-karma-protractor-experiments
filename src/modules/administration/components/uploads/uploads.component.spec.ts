/// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { UploadsComponent } from './uploads.component';

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

	});
}
