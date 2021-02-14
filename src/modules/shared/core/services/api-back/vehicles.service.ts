// Dependencies
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Assets
import { Vehicle } from '@vehicles/models/Vehicle.model';
import { VehicleHeaderData } from '@vehicles/models/VehicleHeaderData.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor() {}

  public getVehiclesToRent(): Observable<Vehicle[]> {
    return of([{
      imgUrl: '../../../../assets/img/c-cc.jpg',
      vehicleCategory: 'Classic Cars',
      categoryInformation: 'Information about classic cars, Information about classic cars, Information about classic cars'
    }, {
      imgUrl: '../../../../assets/img/f12-tdf-sc.jpg',
      vehicleCategory: 'Sports Cars',
      categoryInformation: 'Information about Sports cars, Information about Sports cars, Information about Sports cars'
    }, {
      imgUrl: '../../../../assets/img/lu-lc.jpg',
      vehicleCategory: 'Luxury Cars',
      categoryInformation: 'Information about Luxury cars, Information about Luxury cars, Information about Luxury cars'
    }]);
  }

  public getVehiclesHeaderData(): Observable<VehicleHeaderData> {
    return of({
      imgUrl: '../../../../../../assets/img/amg-gtr-wallpaper.jpg',
      mainTitle: 'Rent your dream car',
      mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut'
    });
  }

}
