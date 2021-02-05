/// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { AdministrationComponent } from '@modules/administration/components/root/administration.component';

export default function() {
	describe('1). RootComponent: ', () => {
		let _fixture;
		let _component;

		beforeEach( waitForAsync( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(AdministrationComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('1.1). should create administration-component root component', waitForAsync( () => {
			// Action & Assert
			expect(_component).toBeTruthy();
		}));

	});
}
