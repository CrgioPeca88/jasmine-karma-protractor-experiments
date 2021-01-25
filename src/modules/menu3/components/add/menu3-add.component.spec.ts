// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { Menu3AddComponent } from './menu3-add.component';

export default function() {
	describe('5). Menu3AddComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3AddComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('5.1). should create the menu3-add component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
