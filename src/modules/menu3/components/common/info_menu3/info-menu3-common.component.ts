// Dependencies
import { Component, Input, Output,
	 ChangeDetectionStrategy, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { GetTypesMessage } from '@menu3/models/dtos/GetTypesMessage.model';
import { GetBusinessDaysRqMessage } from '@cs-core/models/dtos/GetBusinessDaysRqMessage.model';
import { GetBusinessDaysMessage } from '@cs-core/models/dtos/GetBusinessDaysMessage.model';
import { PermissionTimes } from '@menu3/models/objs/PermissionTimes.model';
import { InfoData } from '@menu3/models/objs/InfoData.model';
import { Menu3TransformerModel } from '@menu3/models/menu3-transformer.model';
import { BusinessDays } from '@cs-core/models/objs/BusinessDays.model';

@Component({
	selector: 'info-menu3-common',
	templateUrl: './info-menu3-common.component.html',
	styleUrls: ['./info-menu3-common.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoMenu3CommonComponent {

	public _businessDaysLoading: boolean;
	public _showPermissionDays: boolean;
	public _showInputDateErrorsForBD: boolean;
	public _maxInitialDate: Date;
	public _minEndDate: Date;
	public _nTypes: GetTypesMessage[];
	public _businessDaysDetail: BusinessDays[];
	public _menu3Transformer: Menu3TransformerModel;
	public _permissionTimes: PermissionTimes[];

	@Input() parentForm: FormGroup;
	@Input() showFormErrors: boolean;
	@Input() resetChilds: boolean;
	@Input() infoData: InfoData;
	@Output() businessDaysDetailOut = new EventEmitter();

	constructor(
		private apiFrontFacadeService: ApiFrontFacadeService,
		private apiBackFacadeService: ApiBackFacadeService
	) {
		this._menu3Transformer = new Menu3TransformerModel(this.apiFrontFacadeService);
	}

	ngOnInit() {
		this.getTypes();
		this.getValues();
	}

	ngOnChanges(changes) {
		this.setFormValues(changes);
		this.resetForm(changes);
	}

	private resetForm(changes): void {
		if(changes.resetChilds && changes.resetChilds.currentValue) {
			this._businessDaysLoading = undefined;
			this._showPermissionDays = undefined;
			this._showInputDateErrorsForBD = undefined;
			this._minEndDate = undefined;
			this._maxInitialDate = undefined;
		}
	}

	private setFormValues(changes): void {
		if(changes.infoData && changes.infoData.currentValue) {
			this.buildFormPreChargue(changes.infoData.currentValue);
		}
	}

	private buildFormPreChargue(infoData: InfoData): void {
		this.parentForm.controls['type'].setValue(infoData.tipoId);
		this.parentForm.controls['initialDate'].setValue(infoData.initialDate);
		this.parentForm.controls['endDate'].setValue(infoData.endDate);
		this.parentForm.controls['disccount'].setValue(infoData.disccount);
		this.handleCalendarDates('initialDate', 'startEvent');
		this.getBusinessDays('startEvent', 'endDate');
		if(this.doApplyLogicSpecialType('startEvent')) {
			this.parentForm.controls['permissionTime'].setValue(infoData.permissionTime);
			this.getBusinessDaysBySpecialType('startEvent');
			this._showPermissionDays = true;
		}
	}

	private getTypes(): void {
		this.apiBackFacadeService.getTypes().subscribe(
			(response: GetTypesMessage[]) => {
				this._nTypes = response;
			}
		)
	}

	private getValues(): void {
		this._permissionTimes = [
			{timeValue: 0.5, timeValueName: 'Medio dia'},
			{timeValue: 1, timeValueName: 'Un dia'}
		]
	}

	private isDatesOk(): boolean {
		let isInitialDateOk: boolean = this.apiFrontFacadeService.isFormControlValid(this.parentForm.controls.initialDate);
		let isEndDateOk: boolean = this.apiFrontFacadeService.isFormControlValid(this.parentForm.controls.endDate);
		return (isInitialDateOk && isEndDateOk);
	}

	private removePermissionTimeControl(): boolean {
		this.apiFrontFacadeService.removeControlToForm(this.parentForm, 'permissionTime');
		this._showPermissionDays = undefined;
		return false;
	}

	private canCreatePermissionTime(nTypeId: number, initialDate: string, endDate: string): boolean {
		return (nTypeId === 1) && (initialDate === endDate);
	}

	private createPermissionTimeControl(): boolean {
		this._businessDaysLoading = undefined;
		var control: FormControl = this.apiFrontFacadeService.createControl();
		this.apiFrontFacadeService.setControlsValidators(control, [
			Validators.required
		]);
		this.apiFrontFacadeService.addControlToForm(this.parentForm, 'permissionTime', control);
		this._showPermissionDays = true;
		return true;
	}

	private handleCalendarDates(controlName: string, event: string): boolean {
		if (event && controlName === 'initialDate' ) {
			this._minEndDate = new Date(this.parentForm.controls.initialDate.value);
			return true;
		} else if( event && controlName === 'endDate') {
			this._maxInitialDate = new Date(this.parentForm.controls.endDate.value);
			return true;
		} else {
			return false;
		}
	}

	private handleType(): void {
		if(!this.doApplyLogicSpecialType('true')) {
			this.getBusinessDaysApiResponse();
		}
	}

	private getBusinessDaysRequests(datesInterval: GetBusinessDaysRqMessage[]) : Array<Observable<GetBusinessDaysMessage>> {
		return datesInterval.map(
			(businessDaysRq: GetBusinessDaysRqMessage) => {
				return this.apiBackFacadeService.getBusinessDays(
					businessDaysRq.startDate,
					businessDaysRq.endDate,
					businessDaysRq.month
				);
			}
		);
	}

	private getBusinessDaysApiResponse(): void {
		this._businessDaysLoading = true;
		let datesInterval : GetBusinessDaysRqMessage[] = this.apiFrontFacadeService.getDatesForMonthsInterval(
			this.parentForm.controls.initialDate.value,
			this.parentForm.controls.endDate.value
		);
		let businessDaysRequests: Array<Observable<GetBusinessDaysMessage>> = this.getBusinessDaysRequests(datesInterval);
		forkJoin(businessDaysRequests).subscribe(
			(response: GetBusinessDaysMessage[]) => {
				this.validateNotifyBusinessDays(response.length);
				this._businessDaysDetail = response.map(
					(businessDays : GetBusinessDaysMessage) => {
					this._businessDaysLoading = false;
					return this._menu3Transformer.transformToBusinessDays(businessDays);
				});
				this.setBusinessDaysDetailOut();
		});
	}

	private validateNotifyBusinessDays(monthsLength: number): void {
		if(monthsLength > 1) {
			this.apiFrontFacadeService.showNotify(
				'Se encontraron varios registros en el calculo',
				'done'
			);
		}
	}

	private buildPermissionTimeControl(nTypeId: number, initialDate: string, endDate: string): boolean {
		if(this.canCreatePermissionTime(nTypeId, initialDate, endDate)) {
			return this.createPermissionTimeControl();
		} else if(this.isDatesOk()) {
			this.getBusinessDaysApiResponse();
			return this.removePermissionTimeControl();
		} else {
			return this.removePermissionTimeControl();
		}
	}

	private setBusinessDaysDetailOut() {
		this.businessDaysDetailOut.emit(this._businessDaysDetail);
	}

	getInputErrors(inputName: string): ValidationErrors {
		return this.apiFrontFacadeService.getInputErrors(this.parentForm, inputName);
	}

	doApplyLogicSpecialType(event: string): boolean {
		if(event) {
			let nTypeId: number = parseInt(this.parentForm.controls.type.value);
			let initialDate: string = this.apiFrontFacadeService.applyDatePipe(
				this.parentForm.controls.initialDate.value
			);
			let endDate: string = this.apiFrontFacadeService.applyDatePipe(
				this.parentForm.controls.endDate.value
			);
			return this.buildPermissionTimeControl(nTypeId, initialDate, endDate);
		} else {
			return false;
		}
	}

	getBusinessDays(event: string, controlName: string): void {
		this._businessDaysLoading = undefined;
		if(this.handleCalendarDates(controlName, event) && this.isDatesOk()) {
			this.handleType();
		} else {
			this._showInputDateErrorsForBD = true;
		}
	}

	getBusinessDaysBySpecialType(event: string): void {
		if(event) {
			let days: number = parseFloat(this.parentForm.controls.permissionTime.value);
			let year: number = this.parentForm.controls.initialDate.value.getFullYear();
			let month: number = this.parentForm.controls.initialDate.value.getMonth();
			let monthName: string = this.apiFrontFacadeService.getMonth(month + 1);
			let firstDayOfMonth: Date = new Date(year, month, 1);
			this._businessDaysDetail = [{
				days: days,
				monthName: monthName,
				firstDayOfMonth: this.apiFrontFacadeService.applyDatePipe(firstDayOfMonth.toString(), 'yyyy-MM-dd')
			}];
			this.setBusinessDaysDetailOut();
			this._businessDaysLoading = false;
		}
	}

}
