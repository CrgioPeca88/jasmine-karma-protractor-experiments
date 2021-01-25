// Dependencies
import { NgModule } from '@angular/core';

// Assets
import { AdministrationComponent } from './components/root/administration.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { SharedModule } from '@shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
	imports: [
		SharedModule,
		AdministrationRoutingModule
	],
	declarations: [
		UploadsComponent,
		AdministrationComponent
	]
})
export class AdministrationModule { }
