export interface PutBusinessDaysMessage {
	fechaMes: string;
	diasAfectacion: number;
}

export interface PutModifyMessage {
 tipoId: number;
 fechaInicio: string;
 fechaFin: string;
 diasAusenciaTotal: number;
 descuenta: boolean;
 detalleMesDTO: PutBusinessDaysMessage[];
}
