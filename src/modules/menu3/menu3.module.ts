// Dependencies
import { NgModule } from '@angular/core';

// Assets
import { Menu3ModifyComponent } from './components/modify/menu3-modify.component';
import { Menu3AddComponent } from './components/add/menu3-add.component';
import { Menu3ListComponent } from './components/list/menu3-list.component';
import { InfoMenu3CommonComponent } from './components/common/info_menu3/info-menu3-common.component';
import { Menu3Component } from './components/root/menu3.component';
import { SharedModule } from '@shared/shared.module';
import { Menu3RoutingModule } from './menu3-routing.module';

@NgModule({
	imports: [
		Menu3RoutingModule,
		SharedModule
	],
	declarations: [
		Menu3ModifyComponent,
		Menu3AddComponent,
		Menu3ListComponent,
		InfoMenu3CommonComponent,
		Menu3Component
	]
})
export class Menu3Module { }
