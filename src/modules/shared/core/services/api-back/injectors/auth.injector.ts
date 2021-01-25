// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { AuthService } from '@cs-core/services/api-back/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInjectorService {

	private _authService: AuthService;

	constructor(private injector: Injector) { }

	public getAuthService(): AuthService {
		if(!this._authService) {
			this._authService = this.injector.get(AuthService);
		}
		return this._authService;
	}

}
