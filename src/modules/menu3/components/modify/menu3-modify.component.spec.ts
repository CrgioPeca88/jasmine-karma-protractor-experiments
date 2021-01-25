// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { Menu3ModifyComponent } from './menu3-modify.component';

export default function() {
	describe('2). Menu3ModifyComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3ModifyComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('2.1). should create the menu3-modify component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
