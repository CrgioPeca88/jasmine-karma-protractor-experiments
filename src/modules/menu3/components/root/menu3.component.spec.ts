// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { Menu3Component } from './menu3.component';

export default function() {
	describe('1). RootComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3Component);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('1.1). should create the menu3 component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
