// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';

// Assets
import { Menu3DetailComponent } from '@menu3/components/detail/menu3-detail.component';

export default function() {
	describe('6). Menu3DetailComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( waitForAsync( () => {
			TestBed.configureTestingModule({
				providers: [{
					provide: MatDialogRef, useValue: []
				}, {
					provide: MAT_DIALOG_DATA, useValue: []
				}]
			}).compileComponents();
			// Initial arrange
			_fixture   = TestBed.createComponent(Menu3DetailComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('6.1). should create the menu3-detail component', waitForAsync( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
