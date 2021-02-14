// Dependencies
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { VehicleHeaderData } from '@vehicles/models/VehicleHeaderData.model';

@Component({
  selector: 'app-vehicles-header-container',
  templateUrl: './vehicles-header.container.html'
})
export class VehiclesHeaderContainer implements OnInit, OnDestroy {

  private _getHeaderDataSubs: Subscription;
  public _vehicleHeaderData: VehicleHeaderData;

  constructor(
    private _apiBackFacadeService: ApiBackFacadeService
  ) {
    this._getHeaderDataSubs = new Subscription();
  }

  ngOnInit(): void {
    this._getHeaderDataSubs.add(
      this._apiBackFacadeService.getVehiclesHeaderData().subscribe(
        (data: VehicleHeaderData) => {
          this._vehicleHeaderData = data;
          console.log(this);
        }));
  }

  ngOnDestroy(): void {
    this._getHeaderDataSubs.unsubscribe();
  }

}
