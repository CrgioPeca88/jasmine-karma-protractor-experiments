// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Assets
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    VehiclesRoutingModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    VehiclesComponent,
    DetailComponent
  ]
})
export class VehiclesModule { }
