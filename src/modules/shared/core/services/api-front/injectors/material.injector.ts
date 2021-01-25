// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { MaterialService } from '@cs-core/services/api-front/material.service';

@Injectable({
	providedIn: 'root'
})
export class MaterialInjectorService {

	private _materialService: MaterialService;

	constructor(private injector: Injector) { }

	public getMaterialService(): MaterialService {
		if(!this._materialService) {
			this._materialService = this.injector.get(MaterialService);
		}
		return this._materialService;
	}

}
