// Dependencies
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Assets
import { AuthInjectorService } from './api-back/injectors/auth.injector';
import { AdministrationInjectorService } from './api-back/injectors/administration.injector';
import { CommonInjectorService } from './api-back/injectors/common.injector';
import { Menu3InjectorService } from './api-back/injectors/menu3.injector';
import { GetDocumentTypesMessage } from '@cs-core/models/dtos/GetDocumentTypesMessage.model';
import { GetBusinessDaysMessage } from '@cs-core/models/dtos/GetBusinessDaysMessage.model';
import { GetTypesMessage } from '@menu3/models/dtos/GetTypesMessage.model';
import { PostSaveMessage } from '@menu3/models/dtos/PostSaveMessage.model';
import { GetByIdMessage } from '@menu3/models/dtos/GetByIdMessage.model';
import { PutModifyMessage } from '@menu3/models/dtos/PutModifyMessage.model';
import { GetAllMessage } from '@menu3/models/dtos/GetAllMessage.model';
import { DefaultResponseMessage } from '@cs-core/models/dtos/DefaultResponseMessage.model';
import { GetCurrencyTypeMessage } from '@cs-core/models/dtos/GetCurrencyTypeMessage.model';

@Injectable({
	providedIn: 'root'
})
export class ApiBackFacadeService {

	constructor(
		private authInjectorService: AuthInjectorService,
		private administrationInjectorService: AdministrationInjectorService,
		private menu3InjectorService: Menu3InjectorService,
		private commonInjectorService: CommonInjectorService
	) { }

	/*-----------------------------------------
	* AUTH SERVICES
	------------------------------------------*/
	// TODO: Revisar el tipo any para que devuelva el object
	tokenValidate(sSToken: string): Observable<any> {
		return this.authInjectorService.getAuthService().tokenValidate(sSToken);
	}

	login(userName: string, password: string): Observable<any> {
		return this.authInjectorService.getAuthService().login(userName, password);
	}

	logout(): Observable<any> {
		return this.authInjectorService.getAuthService().logout();
	}

	/*-----------------------------------------
	* ADMINISTRATION SERVICES
	------------------------------------------*/
	modalTest(): Observable<any> {
		return this.administrationInjectorService.getAdministrationService().modalTest();
	}

	/*-----------------------------------------
	* COMMON SERVICES
	------------------------------------------*/
	getDocumentTypes(): Observable<Array<GetDocumentTypesMessage>> {
		return this.commonInjectorService.getCommonService().getDocumentTypes();
	}

	getBusinessDays(startDate: string, endDate: string, month: number): Observable<GetBusinessDaysMessage> {
		return this.commonInjectorService.getCommonService().getBusinessDays(startDate, endDate, month);
	}

	getAllCurrencyTypes(): Observable<Array<GetCurrencyTypeMessage>> {
		return this.commonInjectorService.getCommonService().getAllCurrencyTypes();
	}

	/*-----------------------------------------
	* MENU3 SERVICES
	------------------------------------------*/
	getAllMenu3(): Observable<Array<GetAllMessage>> {
		return this.menu3InjectorService.getMenu3Service().getAllMenu3();
	}

	getTypes(): Observable<Array<GetTypesMessage>> {
		return this.menu3InjectorService.getMenu3Service().getTypes();
	}

	save(data: PostSaveMessage): Observable<any> {
		return this.menu3InjectorService.getMenu3Service().save(data);
	}

	put(menu3ModifyDataPut: PutModifyMessage): Observable<any> {
		return this.menu3InjectorService.getMenu3Service().put(menu3ModifyDataPut);
	}

	delete(id: string): Observable<DefaultResponseMessage> {
		return this.menu3InjectorService.getMenu3Service().delete(id);
	}

	getDataById(id: string): Observable<GetByIdMessage> {
		return this.menu3InjectorService.getMenu3Service().getDataById(id);
	}


	getByPId(id: string): Observable<any> {
		return this.menu3InjectorService.getMenu3Service().getByPId(id);
	}

}
