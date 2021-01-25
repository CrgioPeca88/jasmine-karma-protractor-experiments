// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { AdministrationService } from '@cs-core/services/api-back/administration.service';

@Injectable({
	providedIn: 'root'
})
export class AdministrationInjectorService {

	private _administrationService: AdministrationService;

	constructor(private injector: Injector) { }

	public getAdministrationService(): AdministrationService {
		if(!this._administrationService) {
			this._administrationService = this.injector.get(AdministrationService);
		}
		return this._administrationService;
	}

}
