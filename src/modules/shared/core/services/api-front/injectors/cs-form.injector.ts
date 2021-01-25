// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsFormService } from '@cs-core/services/api-front/cs-form.service';

@Injectable({
	providedIn: 'root'
})
export class CsFormInjectorService {

	private _csFormService: CsFormService;

	constructor(private injector: Injector) { }

 public getCsFormService(): CsFormService {
		if(!this._csFormService) {
			this._csFormService = this.injector.get(CsFormService);
		}
		return this._csFormService;
	}

}
