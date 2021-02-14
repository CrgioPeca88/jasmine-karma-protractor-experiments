// Dependencies
import { Component, Input } from '@angular/core';

// Assets
import { VehicleHeaderData } from '@vehicles/models/VehicleHeaderData.model';

@Component({
  selector: 'app-vehicles-header-component',
  templateUrl: './vehicles-header.component.html',
  styleUrls: ['./vehicles-header.component.less']
})
export class VehiclesHeaderComponent {

  @Input() vehicleHeaderData: VehicleHeaderData;

  constructor() {}

  public goTo(): void {
    console.log('-------goTo-------');
  }

}
