// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsUtilsService } from '@cs-core/services/api-front/cs-utils.service';

@Injectable({
	providedIn: 'root'
})
export class CsUtilsInjectorService {

	private _csUtilsService: CsUtilsService;

	constructor(private injector: Injector) { }

	public getCsUtilsService(): CsUtilsService {
		if(!this._csUtilsService) {
			this._csUtilsService = this.injector.get(CsUtilsService);
		}
		return this._csUtilsService;
	}

}
