// Dependencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { GetDocumentTypesMessage } from '@cs-core/models/dtos/GetDocumentTypesMessage.model';
import { BusinessDays } from '@cs-core/models/objs/BusinessDays.model';
import { PostSaveMessage, PostBusinessDaysMessage } from '@menu3/models/dtos/PostSaveMessage.model';
import { Menu3TransformerModel } from '@menu3/models/menu3-transformer.model';
import { CUSTOM_ERRORS_MENU3_SAVE } from '@shared/constants/custom-errors-config.enum';

@Component({
	selector: 'menu3-add',
	templateUrl: './menu3-add.component.html',
	styleUrls: ['./menu3-add.component.less']
})
export class Menu3AddComponent implements OnInit {

	public _documentTypes: GetDocumentTypesMessage[];
	private _businessDaysDetail: BusinessDays[];
	public _menu3Transformer: Menu3TransformerModel;
	public _AddFormGroup: FormGroup;
	public _showFormErrors: boolean;
	public _showInputErrorsForInfoClient: boolean;
	public _loading: boolean;
	public _resetChilds: boolean;

	constructor(
		private apiBackFacadeService: ApiBackFacadeService,
		private apiFrontFacadeService: ApiFrontFacadeService) {
		this._menu3Transformer = new Menu3TransformerModel(this.apiFrontFacadeService);
		this._AddFormGroup = this.apiFrontFacadeService.getAddForm();
	}

	ngOnInit() {
		this.getDocumentTypes();
	}

	private isDocNumberDataOk(): boolean {
		let isDocumentTypeOk: boolean = this.apiFrontFacadeService.isFormControlValid(this._AddFormGroup.controls.documentType);
		let isDocumentNumberOk: boolean = this.apiFrontFacadeService.isFormControlValid(this._AddFormGroup.controls.documentNumber);
		return (isDocumentTypeOk && isDocumentNumberOk);
	}

	private getDocumentTypes(): void {
		this.apiBackFacadeService.getDocumentTypes().subscribe(
			(response: GetDocumentTypesMessage[]) => {
				this._documentTypes = response;
			});
	}

	private getTotalDays(postBusinessDaysM: PostBusinessDaysMessage[]): number {
		function loop(bdArray: PostBusinessDaysMessage[], result: number): number {
			if (bdArray.length === 0) {
				return result;
			}
			let resultTmp = result + bdArray[0].diasAfectacion;
			bdArray.shift();
			return loop(bdArray, resultTmp);
		}
		return loop(postBusinessDaysM, 0);
	}



	private resetFormAndData(): void {
		this._AddFormGroup.reset();
		this._showFormErrors = undefined;
		this._showInputErrorsForInfoClient = undefined;
		this._loading = undefined;
		this._resetChilds = true;
	}

	private totalDaysOk(totalDays: number): boolean {
		return (totalDays > 0);
	}

	private buildRequestAndSave(): void {
		let postBusinessDaysM: PostBusinessDaysMessage[] = this._businessDaysDetail.map(
			(businessDays: BusinessDays) => {
				return this._menu3Transformer.transformToPostBusinessDaysMessage(businessDays);
			});
		let totalDays: number = this.getTotalDays([...postBusinessDaysM]);
		let dataPost: PostSaveMessage = this._menu3Transformer.transformToPostSaveData(
			this._AddFormGroup,
			totalDays,
			postBusinessDaysM
		);
		if (this.totalDaysOk(totalDays)) {
			this.apiBackFacadeService.save(dataPost).subscribe(
				response => {
					this.resetFormAndData();
					this.apiFrontFacadeService.openDialog('check_circle', 'Se ha creado satisfactoriamente', '35%');
				},
				(error: HttpErrorResponse) => {
					this.apiFrontFacadeService.handleHttpErrorManually(error, CUSTOM_ERRORS_MENU3_SAVE);
				}
			);
		} else {
			this.apiFrontFacadeService.openDialog('info', 'El periodo no contiene días habiles', '35%');
		}
	}

	setBusinessDaysDetail(event) {
		this._businessDaysDetail = event;
	}

	getInputErrors(inputName: string): ValidationErrors {
		return this.apiFrontFacadeService.getInputErrors(this._AddFormGroup, inputName);
	}

	save(): void {
		this._resetChilds = undefined;
		if (this._AddFormGroup.valid) {
			this.buildRequestAndSave();
		} else {
			this._showFormErrors = true;
		}
	}

	goToBack() {
		this.apiFrontFacadeService.goToBack();
	}
}
