// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { Menu3ListComponent } from '@menu3/components/list/menu3-list.component';

export default function() {
	describe('3). Menu3ListComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( waitForAsync( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3ListComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('3.1). should create the menu3-list component', waitForAsync( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
