export interface GetByIdMessage {
	tipoId: number;
	informacionId: number;
	cId: number;
	fechaInicio: Date;
	fechaFin: Date;
	diasAusencia: number;
	tipoXInformacionId: number;
	tipoDocumento: string;
	numeroDocumento: string;
	primerNombre: string;
	segundoNombre: string;
	primerApellido: string;
	segundoApellido: string;
	tipoNombre: string;
	cNombre: string;
	pId: number;
	estado: string;
	nombreCelula: string;
	descuenta: boolean;
	descontado: number;
}
