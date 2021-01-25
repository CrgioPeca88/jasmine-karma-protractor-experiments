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

	constructor(private apiFrontFacadeService: ApiFrontFacadeService) { }

	getAllMenu3(): Observable<Array<GetAllMessage>> {
		//return this.apiFrontFacadeService.get<Array<GetAllMessage>>(`/menu3`);
		return new Observable( o => {
			o.next(
				[{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":267,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"VACACIONES","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":268,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"CALAMIDAD","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":265,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":266,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926},
				{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":267,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"VACACIONES","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":268,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"CALAMIDAD","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":265,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":266,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926},
				{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":267,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"VACACIONES","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":268,"tipoDocumento":"CC","numeroDocumento":"79302428","primerNombre":"LUIS","segundoNombre":"ALEJANDRO","primerApellido":"BERNAL","segundoApellido":"ROMERO","tipoNombre":"CALAMIDAD","cNombre":"AZTECA COMUNICACIONES  COLOMBIA  S.A.S.","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":265,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":266,"tipoDocumento":"CC","numeroDocumento":"11389742","primerNombre":"RAFAEL","segundoNombre":"","primerApellido":"CASAS","segundoApellido":"WECHEK","tipoNombre":"VACACIONES","cNombre":"ADMINISTRADORA COLOMBIANA DE PENSIONES COLPENSIONES","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926}]
			)
		});
	}

	getTypes(): Observable<Array<GetTypesMessage>> {
		//return this.apiFrontFacadeService.get(`/menu3/tipo`);
		return new Observable( o => {
			o.next([
				{"tipoId":4,"tipoNombre":"Tipo4"},
				{"tipoId":3,"tipoNombre":"Tipo3"},
				{"tipoId":2,"tipoNombre":"Tipo2"},
				{"tipoId":1,"tipoNombre":"Tipo1"},
				{"tipoId":6,"tipoNombre":"Tipo6"},
				{"tipoId":5,"tipoNombre":"Tipo5"}
			]);
		});
	}

	save(saveData: PostSaveMessage): Observable<any> {
		//return this.apiFrontFacadeService.post('/menu3', saveData);
		return new Observable( o => {
			o.next(true);
		});
	}

	put(modifyDataPut: PutModifyMessage): Observable<any> {
		//return this.apiFrontFacadeService.put('/menu3/actualizar', modifyDataPut);
		return new Observable( o => {
			o.next(true);
		});
	}

	delete(id: string): Observable<DefaultResponseMessage> {
		//return this.apiFrontFacadeService.delete(`/menu3/inactivar/${id}`);
		return new Observable( o => {
			o.next({
				response: true,
				message: 'OK'
			});
		})
	}

	getDataById(id: string): Observable<GetByIdMessage> {
		//return this.apiFrontFacadeService.get(`/menu3/${id}`);
		return new Observable( o => {
			o.next({
				tipoId: 4,
				informacionId: 88,
				cId: 8,
				fechaInicio: new Date(2019, 9, 9),
				fechaFin: new Date(2019, 10, 9),
				diasAusencia: 20,
				tipoXInformacionId: 3,
				tipoDocumento: '1',
				numeroDocumento: '8888888888',
				primerNombre: 'PNOMBRE',
				segundoNombre: 'SNOMBRE',
				primerApellido: 'PAPELLIDO',
				segundoApellido: 'SAPELLIDO',
				tipoNombre: 'Tipo1',
				cNombre: 'CNOMBRE',
				pId: 2,
				estado: '???',
				nombreCelula: 'XxXXXX',
				descuenta: true,
				descontado: 988
			});
		})
	}

	getByPId(pId: string): Observable<any> {
		return this.apiFrontFacadeService.get(`/menu3/p/${pId}`);
	}

}
