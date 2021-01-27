// Dependencies
import { TestBed, async } from '@angular/core/testing';

// Assets
import { InfoMenu3CommonComponent } from '@menu3/components/common/info-menu3-common.component';

export default function() {
	describe('4). InfoMenu3CommonComponent:', () => {
		let _fixture;
		let _component;

		beforeEach( async( () => {
			// Initial arrange
			_fixture   = TestBed.createComponent(InfoMenu3CommonComponent);
			_component = _fixture.debugElement.componentInstance;
		}));

		it('4.1). should create the info-menu3-common component', async( () => {
    // Action & Assert
				expect(_component).toBeTruthy();
  }));
	});
}
