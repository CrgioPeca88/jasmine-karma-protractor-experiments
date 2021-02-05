// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { LoginComponent } from '@modules/auth/components/login/login.component';

export default function() {
	describe('1). LoginComponent:', () => {
		let _fixture;
		let _component;

		beforeEach(waitForAsync(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(LoginComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it(`1.1). should create the login component`, waitForAsync(() => {
			//Action & Assert
			expect(_component).toBeTruthy();
		}));

	});
}
