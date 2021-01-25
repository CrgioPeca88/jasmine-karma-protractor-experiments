// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { Menu3Service } from '@cs-core/services/api-back/menu3.service';

@Injectable({
	providedIn: 'root'
})
export class Menu3InjectorService {

	private _menu3Service: Menu3Service;

	constructor(private injector: Injector) { }

	public getMenu3Service(): Menu3Service {
		if (!this._menu3Service) {
			this._menu3Service = this.injector.get(Menu3Service);
		}
		return this._menu3Service;
	}

}
