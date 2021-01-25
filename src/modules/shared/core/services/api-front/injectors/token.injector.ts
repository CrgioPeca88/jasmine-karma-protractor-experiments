// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { TokenService } from '@cs-core/services/api-front/token.service';

@Injectable({
	providedIn: 'root'
})
export class TokenInjectorService {

	private _tokenService: TokenService;

	constructor(private injector: Injector) { }

	public getTokenService(): TokenService {
		if(!this._tokenService) {
			this._tokenService = this.injector.get(TokenService);
		}
		return this._tokenService;
	}

}
