// Dependencies
import { Injectable, Type } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
	AbstractControl, FormGroup,
	FormControl, ValidatorFn, ValidationErrors
} from '@angular/forms';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

// Assets
import { CsHttpInjectorService } from './api-front/injectors/cs-http.injector';
import { TokenInjectorService } from './api-front/injectors/token.injector';
import { RouterInjectorService } from './api-front/injectors/router.injector';
import { CsDateInjectorService } from './api-front/injectors/cs-date.injector';
import { MaterialInjectorService } from './api-front/injectors/material.injector';
import { CsIdleInjectorService } from './api-front/injectors/idle.injector';
import { CsUtilsInjectorService } from './api-front/injectors/cs-utils.injector';
import { CsFileInjectorService } from './api-front/injectors/cs-file.injector';
import { CsMessageSubjectInjectorService } from './api-front/injectors/cs-message-subject.injector';
import { CsFormInjectorService } from './api-front/injectors/cs-form.injector';
import { UserData } from '../models/objs/UserData.model';
import { CsErrorHandlerService } from './api-front/cs-error-handler.service';
import { GetBusinessDaysRqMessage } from '@cs-core/models/dtos/GetBusinessDaysRqMessage.model';
import { CustomErrorConfig } from '@shared/constants/custom-errors-config.enum';
import { ConfigDialog } from '@modules/shared/components/alert-dialog/alert-dialog.component';

@Injectable({
	providedIn: 'root'
})
export class ApiFrontFacadeService {

	constructor(
		private csHttpInjectorService: CsHttpInjectorService,
		private tokenInjectorService: TokenInjectorService,
		private routerInjectorService: RouterInjectorService,
		private csErrorHandlerService: CsErrorHandlerService,
		private csDateInjectorService: CsDateInjectorService,
		private materialInjectorService: MaterialInjectorService,
		private idleInjectorService: CsIdleInjectorService,
		private csUtilsInjectorService: CsUtilsInjectorService,
		private csFileInjectorService: CsFileInjectorService,
		private csMessageSubjectInjectorService: CsMessageSubjectInjectorService,
		private csFormInjectorService: CsFormInjectorService
	) { }

	/*-----------------------------------------
	* CS-HTTP SERVICES
	------------------------------------------*/
	post(url: string, data?: any): Observable<any> {
		return this.csHttpInjectorService.getCsHttpService().post(url, data);
	}

	put(url: string, data?: any): Observable<any> {
		return this.csHttpInjectorService.getCsHttpService().put(url, data);
	}

	delete(url: string): Observable<any> {
		return this.csHttpInjectorService.getCsHttpService().delete(url);
	}

	get<T>(url: string, responseTypeBlob?: string): Observable<T> {
		return this.csHttpInjectorService.getCsHttpService().get<T>(url, responseTypeBlob);
	}

	/*-----------------------------------------
	* TOKEN SERVICES
	------------------------------------------*/
	setToken(key: string, token: string): void {
		this.tokenInjectorService.getTokenService().setToken(key, token);
	}

	getToken(key: string): string {
		return this.tokenInjectorService.getTokenService().getToken(key);
	}

	removeToken(key: string): void {
		this.tokenInjectorService.getTokenService().removeToken(key);
	}

	getUserData(): UserData {
		return this.tokenInjectorService.getTokenService().getUserData();
	}

	/*-----------------------------------------
	* ROUTER SERVICES
	------------------------------------------*/
	routeRedirect(routePath: string[], navigationExtras?: NavigationExtras) {
		this.routerInjectorService.getRouterService().routeRedirect(routePath, navigationExtras);
	}

	getPathParams(activatedRoute: ActivatedRoute): any {
		return this.routerInjectorService.getRouterService().getPathParams(activatedRoute);
	}

	getQueryParams<T>(activatedRoute: ActivatedRoute): T {
		return this.routerInjectorService.getRouterService().getQueryParams(activatedRoute);
	}

	goToBack(): void {
		this.routerInjectorService.getRouterService().goToBack();
	}

	/*-----------------------------------------
	* CS-ERROR-HANDLER SERVICES
	------------------------------------------*/
	handleHttpErrorManually(error: HttpErrorResponse, config: CustomErrorConfig[]): void {
		this.csErrorHandlerService.handleHttpErrorManually(error, config);
	}

	handleErrorManually(error: Error): void {
		this.csErrorHandlerService.handleErrorManually(error);
	}

	/*-----------------------------------------
	* CS-DATE SERVICES
	------------------------------------------*/
	getDatesForMonthsInterval(startDate: Date, endDate: Date): GetBusinessDaysRqMessage[] {
		return this.csDateInjectorService.getCsDateService().getDatesForMonthsInterval(startDate, endDate);
	}

	getNameMonths(): string[] {
		return this.csDateInjectorService.getCsDateService().getNameMonths();
	}

	getMonth(month: number): string {
		return this.csDateInjectorService.getCsDateService().getMonth(month);
	}

	getRangeYears(from: number): number[] {
		return this.csDateInjectorService.getCsDateService().getRangeYears(from);
	}

	normaliceDate(year: string, month: string): string {
		return this.csDateInjectorService.getCsDateService().normaliceDate(year, month);
	}

	getDate(year: number, month: number): number {
		return this.csDateInjectorService.getCsDateService().getDate(year, month);
	}

	getDateFromString(date: string): number {
		return this.csDateInjectorService.getCsDateService().getDateFromString(date);
	}

	/*-----------------------------------------
	* MATERIAL SERVICES
	------------------------------------------*/
	openDialog(icon: string, msg: string, widthDialog: string, isConfirmDialog?: boolean,
		configDialog?: ConfigDialog) {
		return this.materialInjectorService.getMaterialService().openDialog(
			icon, msg, widthDialog, isConfirmDialog, configDialog
		);
	}

	openComponentDialog<C>(data: any, widthDialog: string, component: Type<C>) {
		return this.materialInjectorService.getMaterialService().openComponentDialog(data, widthDialog, component);
	}

	showNotify(message: string, icon: string, duration: number = 6000, messageType?: string): void {
		return this.materialInjectorService.getMaterialService().showNotify(message, icon, duration, messageType);
	}

	/*-----------------------------------------
	* UTILS SERVICES
	------------------------------------------*/
	applyDatePipe(actualDate: string, format?: string): string {
		return this.csUtilsInjectorService.getCsUtilsService().applyDatePipe(actualDate, format);
	}

	applyCurrencyPipe(value: string, currencyCode?: string, display?: string): string {
		return this.csUtilsInjectorService.getCsUtilsService().applyCurrencyPipe(value, currencyCode, display);
	}

	handlerWhiteSpace(value: string): string {
		return this.csUtilsInjectorService.getCsUtilsService().handlerWhiteSpace(value);
	}

	sortArray<A>(data: Array<A>, argument: string): Array<A> {
		return this.csUtilsInjectorService.getCsUtilsService().sortArray<A>(data, argument);
	}

	removeformatCurrency(value: string): string {
		return this.csUtilsInjectorService.getCsUtilsService().removeformatCurrency(value);
	}

	formatCurrency(val: string): string {
		return this.csUtilsInjectorService.getCsUtilsService().formatCurrency(val);
	}

	/*-----------------------------------------
	* SAVE FILE SERVICES
	------------------------------------------*/
	exportAsExcelFile(json: any[], excelFileName: string): void {
		this.csFileInjectorService.getCsSaveFileService().exportAsExcelFile(json, excelFileName);
	}

	/*-----------------------------------------
	* CS-FORM SERVICES
	------------------------------------------*/
	isFormControlValid(control: AbstractControl): boolean {
		return this.csFormInjectorService.getCsFormService().isFormControlValid(control);
	}

	getAddForm(): FormGroup {
		return this.csFormInjectorService.getCsFormService().getAddForm();
	}

	getModifyForm(): FormGroup {
		return this.csFormInjectorService.getCsFormService().getModifyForm();
	}

	getOnlyNumbersPattern(): string {
		return this.csFormInjectorService.getCsFormService().getOnlyNumbersPattern();
	}

	createControl(): FormControl {
		return this.csFormInjectorService.getCsFormService().createControl();
	}

	createControlWithValidators(form: FormGroup, controlName: string, validators: ValidatorFn[]): void {
		this.csFormInjectorService.getCsFormService().createControlWithValidators(form, controlName, validators);
	}

	setControlsValidators(control: FormControl, validators: ValidatorFn[]): void {
		this.csFormInjectorService.getCsFormService().setControlsValidators(control, validators);
	}

	addControlToForm(form: FormGroup, controlName: string, control: FormControl): void {
		this.csFormInjectorService.getCsFormService().addControlToForm(form, controlName, control);
	}

	removeControlToForm(form: FormGroup, controlName: string): void {
		this.csFormInjectorService.getCsFormService().removeControlToForm(form, controlName);
	}

	getInputErrors(formGroup: FormGroup, inputName: string): ValidationErrors {
		return this.csFormInjectorService.getCsFormService().getInputErrors(formGroup, inputName);
	}

}
