// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { VehiclesService } from '@cs-core/services/api-back/vehicles.service';

@Injectable({
	providedIn: 'root'
})
export class VehiclesInjectorService {

	private _vehiclesService: VehiclesService;

	constructor(private injector: Injector) { }

	public getVehiclesService(): VehiclesService {
		if (!this._vehiclesService) {
			this._vehiclesService = this.injector.get(VehiclesService);
		}
		return this._vehiclesService;
	}

}
