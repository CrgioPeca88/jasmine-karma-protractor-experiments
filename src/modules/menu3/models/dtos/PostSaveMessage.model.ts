export interface PostBusinessDaysMessage {
	fechaMes: string;
	diasAfectacion: number;
}

export interface PostSaveMessage {
 tipoId: number;
 fechaInicio: string;
 fechaFin: string;
 diasAusenciaTotal: number;
 descuenta: boolean;
 detalleMesDTO: PostBusinessDaysMessage[];
}
