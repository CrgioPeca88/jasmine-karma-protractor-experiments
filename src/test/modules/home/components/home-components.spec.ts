// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Assets
import { HomeComponent } from '@modules/home/components/root/home.component';
import { DashboardComponent } from '@modules/home/components/dashboard/dashboard.component';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { SharedModule } from '@modules/shared/shared.module';
import dashboardComponentTests from './dashboard/dashboard.component.spec';
import rootHomeComponentTests from './root/home.component.spec';

describe('*[HomeModule]: ---------------------------------------------', () => {

		beforeEach(async(() => {
			TestBed.configureTestingModule({
					imports: [
						SharedModule,
						HomeRoutingModule,
						RouterTestingModule
					],
					declarations: [
							HomeComponent,
							DashboardComponent
					],
			}).compileComponents();
		}));

		rootHomeComponentTests();
		dashboardComponentTests();

});
