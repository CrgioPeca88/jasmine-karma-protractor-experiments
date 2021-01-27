// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { LoginComponent } from '@modules/auth/components/login/login.component';

export default function() {
	describe('1). LoginComponent:', () => {
		let _fixture;
		let _component;

		beforeEach(async(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(LoginComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it(`1.1). should create the login component`, async(() => {
			//Action & Assert
			expect(_component).toBeTruthy();
		}));

	});
}
