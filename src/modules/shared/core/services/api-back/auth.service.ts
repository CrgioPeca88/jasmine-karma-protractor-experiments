// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private apiFrontFacadeService: ApiFrontFacadeService) { }

	private getDefaultInstanceObs<D>(data: D): Observable<D> {
		return new Observable(observer => {
			observer.next(data);
		})
	}

	tokenValidate(sSToken: string): Observable<any> {
		let dataTmp = {
			'isValid': true
		};
		return this.getDefaultInstanceObs<any>(dataTmp);
	}

	login(userName: string, password: string): Observable<any> {
		let data = {
			'username': userName,
			'password': password
		};
		if(data.username === 'Jasmine' && data.password === 'Jasmine') {
			return new Observable( o => {
				o.next({
					'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4OCJ9.z_9_sqy800TCMNq9otQP0B1xooAsk1AaoSqpxHNO3F4'
				});
			});
		} else {
			let error: HttpErrorResponse = new HttpErrorResponse({
				error: 'error',
				status: 401,
				statusText: 'Error 401 login'
			});
			return throwError(error);
		}
	}

	logout(): Observable<any> {
		//return this.apiFrontFacadeService.post('/auth/logout', {});
		return new Observable( o => {
			o.next({
				status: 200,
				statusText: 'OK'
			});
		});
	}

}
