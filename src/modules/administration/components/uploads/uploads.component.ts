// Dependencies
import { Component } from '@angular/core';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';

@Component({
	selector: 'admin-uploads',
	templateUrl: './uploads.component.html',
	styleUrls: ['./uploads.component.less']
})
export class UploadsComponent {

	constructor(
		private apiBackFacadeService: ApiBackFacadeService,
		private apiFrontFacadeService: ApiFrontFacadeService
	) { }

	private getConfirmDialogResponse(questionMsg: string) {
		return this.apiFrontFacadeService.openDialog('info', questionMsg, '35%', true).afterClosed();
	}

	modalTest() {
		let questionMsg: string = 'Realmente desea hacer la prueba?';
		this.getConfirmDialogResponse(questionMsg).subscribe(result => {
   if(result) {
					this.apiBackFacadeService.modalTest().subscribe(result => {
						this.apiFrontFacadeService.openDialog('check_circle', 'Llego bien hasta el API', '35%');
					});
			}
  });
	}

}
