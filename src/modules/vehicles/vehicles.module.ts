// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Assets
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesHeaderContainer } from './components/common/vehicles-header/container/vehicles-header.container';
import { VehiclesHeaderComponent } from './components/common/vehicles-header/component/vehicles-header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    VehiclesRoutingModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    VehiclesComponent,
    VehiclesHeaderContainer,
    VehiclesHeaderComponent,
    DetailComponent
  ]
})
export class VehiclesModule { }
