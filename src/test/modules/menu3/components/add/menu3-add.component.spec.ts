// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { Menu3AddComponent } from '@menu3/components/add/menu3-add.component';

export default function() {
	describe('5). Menu3AddComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( waitForAsync( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3AddComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('5.1). should create the menu3-add component', waitForAsync( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
