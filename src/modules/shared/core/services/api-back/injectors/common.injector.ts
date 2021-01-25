// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CommonService } from '@cs-core/services/api-back/common.service';

@Injectable({
	providedIn: 'root'
})
export class CommonInjectorService {

	private _commonService: CommonService;

	constructor(private injector: Injector) { }

	public getCommonService(): CommonService {
		if(!this._commonService) {
			this._commonService = this.injector.get(CommonService);
		}
		return this._commonService;
	}

}
