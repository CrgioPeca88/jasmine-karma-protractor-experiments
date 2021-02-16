// Dependencies
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { Vehicle } from '@vehicles/models/Vehicle.model';

@Component({
  selector: 'vehicles-car-card-container',
  templateUrl: './car-card.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardContainer implements OnInit, OnDestroy {

  private _getRentCarsSubs: Subscription;
  public _rentCategories: Vehicle[];

  constructor(
    private _apiBackFacadeService: ApiBackFacadeService,
    private _cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this._getRentCarsSubs = new Subscription();
    this._rentCategories = [];
  }

  ngOnInit(): void {
    this._getRentCarsSubs.add(
      this._apiBackFacadeService.getVehiclesToRent().subscribe(
        (rentCategories: Vehicle[]) => {
          this._rentCategories = rentCategories;
          this._cdr.detectChanges();
        })
    );
  }

  ngOnDestroy(): void {
    this._getRentCarsSubs.unsubscribe();
  }

  public goToDetails(event: Vehicle): void {
    const ne: NavigationExtras = {
      state: {
        value: event
      }
    }
    this.router.navigate(['/vehicles/detail'], ne);
  }

}
