// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assests
import { AppComponent } from '@modules/app/components/root/app.component';

export default function() {
	describe('1). RootComponent:', () => {
		let _fixture;
		let _appComponent;

		beforeEach(async(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(AppComponent);
			_appComponent = _fixture.debugElement.componentInstance;
		}));

  it('1.1). should create the app component', () => {
    // Action & Assert
				expect(_appComponent).toBeTruthy();
  });

	});
}
