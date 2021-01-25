import { CsAsyncRequest } from './CsAsyncRequest.model';

export interface GetCurrencyTypeMessage extends CsAsyncRequest {
	monedaId: number;
	monedaNombre: string;
	monedaCodigo: string;
}
