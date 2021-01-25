// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsHttpService } from '@cs-core/services/api-front/cs-http.service';

@Injectable({
	providedIn: 'root'
})
export class CsHttpInjectorService {

	private _csHttpService: CsHttpService;

	constructor(private injector: Injector) { }

 public getCsHttpService(): CsHttpService {
		if(!this._csHttpService) {
			this._csHttpService = this.injector.get(CsHttpService);
		}
		return this._csHttpService;
	}

}
