// Dependencies
import { FormGroup } from '@angular/forms';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { PostSaveMessage, PostBusinessDaysMessage } from './dtos/PostSaveMessage.model';
import { PutModifyMessage, PutBusinessDaysMessage } from './dtos/PutModifyMessage.model';
import { InfoData } from './objs/InfoData.model';
import { GetBusinessDaysMessage } from '@cs-core/models/dtos/GetBusinessDaysMessage.model';
import { GetByIdMessage } from '@menu3/models/dtos/GetByIdMessage.model';
import { BusinessDays } from '@cs-core/models/objs/BusinessDays.model';
import { GetAllMessage } from './dtos/GetAllMessage.model';
import { XlsxData } from './objs/XlsxData.model';

export class Menu3TransformerModel {
	constructor(private apiFrontFacadeService: ApiFrontFacadeService) { }

	transformToBusinessDays(response: GetBusinessDaysMessage): BusinessDays {
		let firstDayOfMonth: Date = new Date(response.anio, response.mes - 1, 1);
		return {
			days: response.diasHabiles,
			monthName: this.apiFrontFacadeService.getMonth(response.mes),
			firstDayOfMonth: this.apiFrontFacadeService.applyDatePipe(firstDayOfMonth.toString(), 'yyyy-MM-dd')
		};
	}

	transformToPostBusinessDaysMessage(businessDaysDetail: BusinessDays): PostBusinessDaysMessage {
		return {
			fechaMes: businessDaysDetail.firstDayOfMonth,
			diasAfectacion: businessDaysDetail.days
		};
	}

	transformToPutBusinessDaysMessage(businessDaysDetail: BusinessDays): PutBusinessDaysMessage {
		return {
			fechaMes: businessDaysDetail.firstDayOfMonth,
			diasAfectacion: businessDaysDetail.days
		};
	}

	tranformToInfoData(response: GetByIdMessage): InfoData {
		let initialDate: Date = new Date(response.fechaInicio);
		let endDate: Date = new Date(response.fechaFin);
		return {
			tipoId: response.tipoId,
			initialDate: initialDate,
			endDate: endDate,
			permissionTime: response.diasAusencia,
			disccount: response.descuenta
		};
	}

	transformToPostSaveData(
		nAddFormGroup: FormGroup,
		daysTotal: number,
		businessDaysDetail: PostBusinessDaysMessage[]
	): PostSaveMessage {
		let fechaInicio: string = this.apiFrontFacadeService.applyDatePipe(nAddFormGroup.controls.initialDate.value, 'yyyy-MM-dd');
		let fechaFin: string = this.apiFrontFacadeService.applyDatePipe(nAddFormGroup.controls.endDate.value, 'yyyy-MM-dd');
		return {
			tipoId: parseInt(nAddFormGroup.controls.type.value),
		 	fechaInicio: fechaInicio,
		 	fechaFin: fechaFin,
		 	diasAusenciaTotal: daysTotal,
		 	descuenta: nAddFormGroup.controls.disccount.value,
		 	detalleMesDTO: businessDaysDetail
		}
	}

	transformToPutModify(
		modifyFormGroup: FormGroup,
		daysTotal: number,
		businessDaysDetail: PutBusinessDaysMessage[]
	): PutModifyMessage {
		let fechaInicio: string = this.apiFrontFacadeService.applyDatePipe(modifyFormGroup.controls.initialDate.value, 'yyyy-MM-dd');
		let fechaFin: string = this.apiFrontFacadeService.applyDatePipe(modifyFormGroup.controls.endDate.value, 'yyyy-MM-dd');
		return {
			tipoId: parseInt(modifyFormGroup.controls.type.value),
		  fechaInicio: fechaInicio,
		  fechaFin: fechaFin,
		  diasAusenciaTotal: daysTotal,
			descuenta: modifyFormGroup.controls.disccount.value,
			detalleMesDTO: businessDaysDetail
		}
	}

	transformToXlsxData(menu3: GetAllMessage[]): XlsxData[] {
		return menu3.map(
			(n: GetAllMessage) => {
				let initialDate: string = this.apiFrontFacadeService.applyDatePipe(n.fechaInicio);
				let endDate: string = this.apiFrontFacadeService.applyDatePipe(n.fechaFin);
				return {
					'N': n.tipoXInformacionId,
					'Fecha inicial': initialDate,
					'Fecha final': endDate,
					'Tipo de documento': n.tipoDocumento,
					'Numero de documento': n.numeroDocumento,
					'P': n.p,
					'Tipo': n.tipoNombre,
					'C': n.cNombre,
					'Celula': n.nombreCelula,
					'Descuenta': n.ynDescuenta,
					'Cc': n.ynDescontado,
					'Numero': n.descontado
				};
			});
	}

}
