// Dependencies
import { Injectable } from '@angular/core';
import { UserData } from '@cs-core/models/objs/UserData.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	private _userData: UserData;
	private _jwtHelper: JwtHelperService;

	constructor() {
		this._jwtHelper = new JwtHelperService();
	}

	setToken(key: string, token: string): void {
		sessionStorage.setItem(key, token);
	}

	getToken(key: string): string {
		return sessionStorage.getItem(key);
	}

	removeToken(key: string): void {
		sessionStorage.removeItem(key);
	}

	getUserData(): UserData {
		
		if (!this._userData) {
			const token = this.getToken('token');

			if (!token) {
				return this.mapUserData();
			}
			const tokenPayload = this._jwtHelper.decodeToken(token);

			this._userData = this.mapUserData(tokenPayload);
			return this._userData;
		} else {
			return this._userData;
		}
	}

	private mapUserData(tokenPayload?: any): UserData {
		if (tokenPayload) {
			return this._userData = {
				name: '',
				user: tokenPayload.sub,
				timeout: tokenPayload.tiempo_inactividad,
				email: ''
			};
		}
		
		return this._userData = {
			name: '',
			user: '',
			timeout: 100,
			email: ''
		};

	}

}
