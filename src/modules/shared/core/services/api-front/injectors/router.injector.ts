// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { RouterService } from '@cs-core/services/api-front/router.service';

@Injectable({
	providedIn: 'root'
})
export class RouterInjectorService {

	private _routerService: RouterService;

	constructor(private injector: Injector) { }

	public getRouterService(): RouterService {
		if(!this._routerService) {
			this._routerService = this.injector.get(RouterService);
		}
		return this._routerService;
	}

}
