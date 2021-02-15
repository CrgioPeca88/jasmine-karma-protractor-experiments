// Dependencies
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Assets
import { VehicleHeaderData } from '@vehicles/models/VehicleHeaderData.model';

@Component({
  selector: 'app-vehicles-header-component',
  templateUrl: './vehicles-header.component.html',
  styleUrls: ['./vehicles-header.component.less']
})
export class VehiclesHeaderComponent {

  @Input() vehicleHeaderData: VehicleHeaderData;
  @Output() clickGoTo: EventEmitter<boolean>;

  constructor() {
    this.clickGoTo = new EventEmitter<boolean>();
  }

  public goTo(): void {
    this.clickGoTo.emit(true);
  }

}
