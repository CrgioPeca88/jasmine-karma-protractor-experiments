// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { Menu3ModifyComponent } from '@menu3/components/modify/menu3-modify.component';

export default function() {
	describe('2). Menu3ModifyComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( waitForAsync( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3ModifyComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('2.1). should create the menu3-modify component', waitForAsync( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
