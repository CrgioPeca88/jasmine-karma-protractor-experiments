// Dependencies
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles-header-component',
  templateUrl: './vehicles-header.component.html',
  styleUrls: ['./vehicles-header.component.less']
})
export class VehiclesHeaderComponent {

  constructor() {}

  public goTo(): void {
    console.log('-------goTo-------');
  }

}
