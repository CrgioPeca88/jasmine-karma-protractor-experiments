// Dependencies
import { Component } from '@angular/core';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';

@Component({
	selector: 'home-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})
export class HeaderComponent {

	constructor(
		private apiBackFacadeService: ApiBackFacadeService,
		private apiFrontFacadeService: ApiFrontFacadeService) { }

	logout(): void {
		this.apiBackFacadeService.logout().subscribe( (response) => {
			this.apiFrontFacadeService.removeToken('token');
			this.apiFrontFacadeService.routeRedirect(['/login']);
		})
	}

	redirect(path: string): void {
		this.apiFrontFacadeService.routeRedirect([path]);
	}

}
