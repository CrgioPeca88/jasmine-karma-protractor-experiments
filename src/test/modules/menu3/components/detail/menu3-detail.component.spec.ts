// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { Menu3DetailComponent } from '@menu3/components/detail/menu3-detail.component';

export default function() {
	describe('6). Menu3DetailComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3DetailComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('6.1). should create the menu3-detail component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
