// Dependencies
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

// Assets
import { Vehicle } from '@vehicles/models/Vehicle.model';

@Component({
  selector: 'vehicles-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements DoCheck {

public _vehicleInfo: Vehicle;

  constructor(
    private _router: Router
  ) {
    this._vehicleInfo = this._router.getCurrentNavigation()?.extras?.state?.value;
  }

  ngDoCheck(): void {
    if (typeof this._vehicleInfo === 'undefined' ) {
      this._router.navigate(['/vehicles/home']);
    }
  }

  public goToBack(): void {
    this._router.navigate(['/vehicles/home']);
  }

}
