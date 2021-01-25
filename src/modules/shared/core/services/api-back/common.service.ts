// Dependencies
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { GetDocumentTypesMessage } from '@cs-core/models/dtos/GetDocumentTypesMessage.model';
import { GetBusinessDaysMessage } from '@cs-core/models/dtos/GetBusinessDaysMessage.model';
import { GetCurrencyTypeMessage } from '@cs-core/models/dtos/GetCurrencyTypeMessage.model';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(private apiFrontFacadeService: ApiFrontFacadeService) { }

	getDocumentTypes(): Observable<Array<GetDocumentTypesMessage>> {
		//return this.apiFrontFacadeService.get('/tipodocumento');
		return new Observable(o => {
			o.next([{
				'tipoDocumentoId': 1,
				'nombreDocumento': 'Cedula ciudadania',
				'nombreCorto': 'CC'
			},{
				'tipoDocumentoId': 2,
				'nombreDocumento': 'Cedula de extranjeria',
				'nombreCorto': 'CE'
			}]);
		});
	}

	getBusinessDays(startDate: string, endDate: string, month: number): Observable<GetBusinessDaysMessage> {
		//return this.apiFrontFacadeService.get<GetBusinessDaysMessage>(`/menu3/diasHabiles/${startDate}/${endDate}/${month}`);
		return new Observable(o => {
			o.next({
				diasHabiles: 8,
				mes: 9,
				anio: 2019
			});
			o.complete();
		});
	}

	getAllCurrencyTypes(): Observable<Array<GetCurrencyTypeMessage>> {
		//return this.apiFrontFacadeService.get<Array<GetCurrencyTypeMessage>>(`/moneda`);
		return new Observable( o => {
			o.next([
				{"monedaId":1,"monedaNombre":"PESO","monedaCodigo":"COP"},
				{"monedaId":2,"monedaNombre":"DOLAR ESTADOUNIDENSE","monedaCodigo":"USD"},
				{"monedaId":3,"monedaNombre":"EURO","monedaCodigo":"EUR"}
			]);
			o.complete();
		});
	}

}
