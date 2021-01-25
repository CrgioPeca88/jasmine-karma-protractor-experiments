// Dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { GetByIdMessage } from '@menu3/models/dtos/GetByIdMessage.model';
import { PutModifyMessage, PutBusinessDaysMessage } from '@menu3/models/dtos/PutModifyMessage.model';
import { InfoData } from '@menu3/models/objs/InfoData.model';
import { BusinessDays } from '@cs-core/models/objs/BusinessDays.model';
import { Menu3TransformerModel } from '@menu3/models/menu3-transformer.model';
import { CUSTOM_ERRORS_MENU3_SAVE } from '@shared/constants/custom-errors-config.enum';

export interface PathParamsModify {
	menu3Id: string;
}

@Component({
	selector: 'menu3-modify',
	templateUrl: './menu3-modify.component.html',
	styleUrls: ['./menu3-modify.component.less']
})
export class Menu3ModifyComponent implements OnInit {
	private _businessDaysDetail: BusinessDays[];
	public _pathParams: PathParamsModify;
	public _dataById: GetByIdMessage;
	public _modifyFormGroup: FormGroup;
	public _menu3Transformer: Menu3TransformerModel;
	public _infoData: InfoData;
	public _loadingById: boolean;
	public _showFormErrors: boolean;

	constructor(
		private activatedRoute: ActivatedRoute,
		private apiFrontFacadeService: ApiFrontFacadeService,
		private apiBackFacadeService: ApiBackFacadeService
	) {
		this._menu3Transformer = new Menu3TransformerModel(this.apiFrontFacadeService);
		this._modifyFormGroup = this.apiFrontFacadeService.getModifyForm();
	}

	ngOnInit() {
		this._pathParams = this.apiFrontFacadeService.getPathParams(this.activatedRoute);
		this.getDataById(this._pathParams.menu3Id);
	}

	private getDataById(menu3Id: string): void {
		this._loadingById = true;
		this.apiBackFacadeService.getDataById(menu3Id).subscribe(
			(response: GetByIdMessage) => {
				this._dataById = response;
				this._infoData = this._menu3Transformer.tranformToInfoData(response);
				this._loadingById = false;
			}
		);
	}

	private totalDaysOk(totalDays: number): boolean {
		return (totalDays > 0);
	}

	private getTotalDays(putBusinessDaysM: PutBusinessDaysMessage[]): number {
		function loop(bdArray: PutBusinessDaysMessage[], result: number): number {
			if (bdArray.length === 0) {
				return result;
			}
			let resultTmp = result + bdArray[0].diasAfectacion;
			bdArray.shift();
			return loop(bdArray, resultTmp);
		}
		return loop(putBusinessDaysM, 0);
	}

	private buildRequestAndSave(): void {
		let putBusinessDaysM: PutBusinessDaysMessage[] = this._businessDaysDetail.map(
			(businessDays: BusinessDays) => {
				return this._menu3Transformer.transformToPutBusinessDaysMessage(businessDays);
			});
		let totalDays: number = this.getTotalDays([...putBusinessDaysM]);
		let nModifyDataPut: PutModifyMessage = this._menu3Transformer.transformToPutModify(
			this._modifyFormGroup,
			totalDays,
			putBusinessDaysM
		);
		if (this.totalDaysOk(totalDays)) {
			this.apiBackFacadeService.put(nModifyDataPut).subscribe(
				response => {
					this.apiFrontFacadeService.openDialog('check_circle', 'Se ha modificado satisfactoriamente', '35%');
					this.apiFrontFacadeService.routeRedirect(['menu3']);
				},
				(error: HttpErrorResponse) => {
					this.apiFrontFacadeService.handleHttpErrorManually(error, CUSTOM_ERRORS_MENU3_SAVE);
				}
			);
		} else {
			this.apiFrontFacadeService.openDialog('info', 'El periodo seleccionado no contiene días habiles', '35%');
		}
	}

	setBusinessDaysDetail(event) {
		this._businessDaysDetail = event;
	}

	modify(): void {
		if (this._modifyFormGroup.valid) {
			this.buildRequestAndSave();
		} else {
			this._showFormErrors = true;
		}
	}

	goToBack() {
		this.apiFrontFacadeService.goToBack();
	}

}
