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
				[{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":1,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":2,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo2","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":3,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":4,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926},
				{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":5,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":6,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo2","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":7,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":8,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926},
				{"tipoId":4,"informacionId":280,"cId":74,"fechaInicio":"2019-09-01T05:00:00.000+0000","fechaFin":"2019-09-10T05:00:00.000+0000","diasAusencia":7.0,"tipoXInformacionId":9,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":3,"informacionId":280,"cId":74,"fechaInicio":"2019-10-01T05:00:00.000+0000","fechaFin":"2019-10-20T05:00:00.000+0000","diasAusencia":13.0,"tipoXInformacionId":10,"tipoDocumento":"CC","numeroDocumento":"88888888","primerNombre":"Sergio","segundoNombre":"-","primerApellido":"CaPe","segundoApellido":"-","tipoNombre":"Tipo2","cNombre":"Nombre1","pId":198,"estado":"ACTIVO","nombreCelula":"339","descuenta":true,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-01-16T05:00:00.000+0000","fechaFin":"2019-01-23T05:00:00.000+0000","diasAusencia":6.0,"tipoXInformacionId":11,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":false,"descontado":null},
				{"tipoId":4,"informacionId":315,"cId":1,"fechaInicio":"2019-02-04T05:00:00.000+0000","fechaFin":"2019-02-13T05:00:00.000+0000","diasAusencia":8.0,"tipoXInformacionId":12,"tipoDocumento":"CC","numeroDocumento":"99999999","primerNombre":"Oigres","segundoNombre":"Segundo","primerApellido":"PeCa","segundoApellido":"-","tipoNombre":"Tipo1","cNombre":"Nombre2","pId":130,"estado":"ACTIVO","nombreCelula":"241","descuenta":true,"descontado":926}]
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
				tipoId: 88,
				informacionId: 88,
				cId: 88,
				fechaInicio: new Date(2019, 9, 9),
				fechaFin: new Date(2019, 10, 9),
				diasAusencia: 8,
				tipoXInformacionId: 8,
				tipoDocumento: '88888',
				numeroDocumento: '8888888888',
				primerNombre: 'Sergio',
				segundoNombre: '-',
				primerApellido: 'PeCa',
				segundoApellido: '-',
				tipoNombre: 'Tipo1',
				cNombre: 'NOMBRE',
				pId: 8,
				estado: '???',
				nombreCelula: 'XxXXXX',
				descuenta: true,
				descontado: 88
			});
		})
	}

	getByPId(pId: string): Observable<any> {
		return this.apiFrontFacadeService.get(`/menu3/p/${pId}`);
	}

}
