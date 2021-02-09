// Dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Assets
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  component: VehiclesComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'detail',
    component: DetailComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
