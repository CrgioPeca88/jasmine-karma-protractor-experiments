// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assests
import { Page404Component } from './page404.component';

export default function() {
	describe('2). Page404Component:', () => {
		let _fixture;
		let _component;

		beforeEach(async(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(Page404Component);
			_component = _fixture.debugElement.componentInstance;
		}));

  it('2.1). should create the app component', () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  });

	});
}
