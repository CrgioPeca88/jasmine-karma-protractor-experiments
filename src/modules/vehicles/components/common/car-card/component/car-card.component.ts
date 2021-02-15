// Dependencies
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Assets
import { Vehicle } from '@vehicles/models/Vehicle.model';

@Component({
  selector: 'vehicles-car-card-component',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.less']
})
export class CarCardComponent {

  @Input() rentCategoriesData: Vehicle[];
  @Output() clickGoToDetail: EventEmitter<Vehicle>;

  constructor() {
    this.clickGoToDetail = new EventEmitter<Vehicle>();
  }

  public goToDetails(vehicleData: Vehicle): void {
    this.clickGoToDetail.emit(vehicleData);
  }

}
