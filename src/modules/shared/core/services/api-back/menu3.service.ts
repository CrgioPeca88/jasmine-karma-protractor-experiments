// Dependencies
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { GetTypesMessage } from '@menu3/models/dtos/GetTypesMessage.model';
import { GetAllMessage } from '@menu3/models/dtos/GetAllMessage.model';
import { PostSaveMessage } from '@menu3/models/dtos/PostSaveMessage.model';
import { GetByIdMessage } from '@menu3/models/dtos/GetByIdMessage.model';
import { PutModifyMessage } from '@menu3/models/dtos/PutModifyMessage.model';
import { DefaultResponseMessage } from '@cs-core/models/dtos/DefaultResponseMessage.model';

@Injectable({
	providedIn: 'root'
})
export class Menu3Service {

	constructor(
		private apiFrontFacadeService: ApiFrontFacadeService
	) { }

	public getAllMenu3(): Observable<Array<GetAllMessage>> {
		return this.apiFrontFacadeService.get<Array<GetAllMessage>>(`/menu3`);
	}

	public getTypes(): Observable<Array<GetTypesMessage>> {
		return this.apiFrontFacadeService.get(`/menu3/tipo`);
	}

	public save(saveData: PostSaveMessage): Observable<any> {
		return this.apiFrontFacadeService.post('/menu3', saveData);
	}

	public put(modifyDataPut: PutModifyMessage): Observable<any> {
		return this.apiFrontFacadeService.put('/menu3/actualizar', modifyDataPut);
	}

	public delete(id: string): Observable<DefaultResponseMessage> {
		return this.apiFrontFacadeService.delete(`/menu3/inactivar/${id}`);
	}

	public getDataById(id: string): Observable<GetByIdMessage> {
		return this.apiFrontFacadeService.get(`/menu3/${id}`);
	}

}
