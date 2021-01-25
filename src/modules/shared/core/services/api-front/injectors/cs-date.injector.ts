// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsDateService } from '@cs-core/services/api-front/cs-date.service';

@Injectable({
	providedIn: 'root'
})
export class CsDateInjectorService {

	private _csDateService: CsDateService;

	constructor(private injector: Injector) { }

 public getCsDateService(): CsDateService {
		if(!this._csDateService) {
			this._csDateService = this.injector.get(CsDateService);
		}
		return this._csDateService;
	}

}
