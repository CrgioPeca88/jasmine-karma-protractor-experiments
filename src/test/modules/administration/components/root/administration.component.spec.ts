/// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { AdministrationComponent } from '@modules/administration/components/root/administration.component';

export default function() {
	describe('1). RootComponent: ', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(AdministrationComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('1.1). should create administration-component root component', async( () => {
			// Action & Assert
			expect(_component).toBeTruthy();
		}));

	});
}
