// Dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Assets
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root'
})
export class CsHttpService {

	constructor(private httpClient: HttpClient) { }

	private getHttpconfig(responseType) {
		const getHeaders: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		const conf = { headers: getHeaders, responseType: '' };
		if (responseType) {
			conf.responseType = responseType;
		}
		return conf;
	}

	// TODO: revisar el timeout en los request!
	post(url: string, data: any): Observable<any> {
		let postHeaders: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.httpClient.post(`${environment.apiBackUrl}${url}`, data, {
			headers: postHeaders
		});
	}

	put(url: string, data: any): Observable<any> {
		let putHeaders: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.httpClient.put(`${environment.apiBackUrl}${url}`, data, {
			headers: putHeaders
		});
	}

	get<T>(url: string, responseType?: string): Observable<T> {
		let config = {};
		config = this.getHttpconfig(responseType);
		return this.httpClient.get<T>(`${environment.apiBackUrl}${url}`, config);
	}

	delete(url: string): Observable<any> {
		let deleteHeaders: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.httpClient.delete(`${environment.apiBackUrl}${url}`, {
			headers: deleteHeaders
		});
	}

}
