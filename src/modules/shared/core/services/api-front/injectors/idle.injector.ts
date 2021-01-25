// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsIdleService } from '@cs-core/services/api-front/cs-idle.service';

@Injectable({
	providedIn: 'root'
})
export class CsIdleInjectorService {

	private _csIdleService: CsIdleService;

	constructor(private injector: Injector) { }

 public getCsIdleService(): CsIdleService {
		if(!this._csIdleService) {
			this._csIdleService = this.injector.get(CsIdleService);
		}
		return this._csIdleService;
	}

}