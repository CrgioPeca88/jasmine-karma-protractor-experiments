// Dependencies
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Assets
import { Vehicle } from '@vehicles/models/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor() {}

  getVehiclesToRent(): Observable<Vehicle[]> {
    return of([{
      imgUrl: '../../../assets/c-cc.jpg',
      vehicleCategory: 'Classic Cars',
      categoryInformation: 'Information about classic cars, Information about classic cars, Information about classic cars'
    }, {
      imgUrl: '../../../assets/f12-tdf-sc.jpg',
      vehicleCategory: 'Sports Cars',
      categoryInformation: 'Information about Sports cars, Information about Sports cars, Information about Sports cars'
    }, {
      imgUrl: '../../../assets/lu-lc.jpg',
      vehicleCategory: 'Luxury Cars',
      categoryInformation: 'Information about Luxury cars, Information about Luxury cars, Information about Luxury cars'
    }]);
  }
}
