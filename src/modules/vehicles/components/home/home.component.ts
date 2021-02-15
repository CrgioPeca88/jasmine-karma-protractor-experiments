// Dependencies
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Subscription } from 'rxjs';
//import { Router, NavigationExtras } from '@angular/router';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
//import { Vehicle } from '@vehicles/models/Vehicle.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  //private _getRentCarsSubs: Subscription;
  //public _rentCategories: Vehicle[];

  constructor(
    //private _apiBackFacadeService: ApiBackFacadeService,
    //private router: Router
  ) {
    //this._getRentCarsSubs = new Subscription();
    //this._rentCategories = [];
  }

  ngOnInit(): void {
    /*this._getRentCarsSubs.add(
      this._apiBackFacadeService.getVehiclesToRent().subscribe(
        (rentCategories: Vehicle[]) => {
          this._rentCategories = rentCategories;
        })
    );*/
  }

  ngOnDestroy(): void {
    //this._getRentCarsSubs.unsubscribe();
  }

}
