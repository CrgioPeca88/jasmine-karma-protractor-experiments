// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { DashboardComponent } from '@modules/home/components/dashboard/dashboard.component';

export default function() {
	describe('2). DashboardComponent:', () => {
		let _fixture;
		let _dashboardComponent;

		beforeEach(waitForAsync(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(DashboardComponent);
			_dashboardComponent = _fixture.debugElement.componentInstance;
		}));

		it(`2.1). should create the dashboard component`, waitForAsync(() => {
			// Action & Assert
			expect(_dashboardComponent).toBeTruthy();
		}));

		it(`2.2). should have as title 'Home page under construction!'`, waitForAsync(() => {
			// Action & Assert
			expect(_dashboardComponent._moviesCover.length).toEqual(2);
		}));

	});
}
