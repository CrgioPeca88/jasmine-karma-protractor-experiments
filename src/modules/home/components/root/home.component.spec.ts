// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { HomeComponent } from '@modules/home/components/root/home.component';

export default function() {
	describe('1). RootComponent:', () => {

		let _fixture;
		let _homeComponent;

		beforeEach(async(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(HomeComponent);
			_homeComponent = _fixture.debugElement.componentInstance;
		}));

		it(`1.1). should create the home component`, async(() => {
			// Action & Assert
			expect(_homeComponent).toBeTruthy();
		}));

	});
}
