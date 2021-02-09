// Dependencies
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

// Assets
import { VehiclesService } from '@modules/shared/services/vehicles.service.ts';
import { Vehicle } from '@modules/shared/models/Vehicle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _getRentCarsSubs: Subscription;
  public _rentCategories: Vehicle[];

  constructor(
    private _vehiclesService: VehiclesService,
    private router: Router
  ) {
    this._getRentCarsSubs = new Subscription();
    this._rentCategories = [];
  }

  ngOnInit(): void {
    this._getRentCarsSubs.add(
      this._vehiclesService.getVehiclesToRent().subscribe(
        (rentCategories: Vehicle[]) => {
          this._rentCategories = rentCategories;
        })
    );
  }

  ngOnDestroy(): void {
    this._getRentCarsSubs.unsubscribe();
  }

  public goToDetails(rc: Vehicle): void {
    const ne: NavigationExtras = {
      state: {
        value: rc
      }
    }
    this.router.navigate(['/vehicles/detail'], ne);
  }

}
