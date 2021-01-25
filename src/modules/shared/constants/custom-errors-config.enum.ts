export enum StatusCode {
	bad_request = 400,
	unauthorized = 401,
	not_found = 404,
	internal_server_error = 500
}
Object.freeze(StatusCode);

export interface CustomErrorConfig {
	statusCode: StatusCode;
	message: string;
	icon?: string;
}

const internalServerErrorDefaultMsg: string = 'Error en el sistema, intente de nuevo.';

export const CUSTOM_ERRORS_LOGIN_CONFIG: CustomErrorConfig[] = [{
	'statusCode': StatusCode.unauthorized,
	'message': 'Usuario o contraseña incorrectos'
}, {
	'statusCode': StatusCode.internal_server_error,
	'message': internalServerErrorDefaultMsg
}];
Object.freeze(CUSTOM_ERRORS_LOGIN_CONFIG);

export const CUSTOM_ERRORS_MENU3_SAVE: CustomErrorConfig[] = [{
	'statusCode': StatusCode.bad_request,
	'message': 'Ya existe una novedad en el periodo seleccionado',
	'icon': 'info'
},{
	'statusCode': StatusCode.internal_server_error,
	'message': internalServerErrorDefaultMsg
}]
Object.freeze(CUSTOM_ERRORS_MENU3_SAVE);
