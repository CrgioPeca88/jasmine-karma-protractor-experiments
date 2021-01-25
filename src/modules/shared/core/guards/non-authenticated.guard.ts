//Dependencies
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

//Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';

@Injectable({
    providedIn: 'root'
})
export class NonAuthenticatedGuard implements CanActivate {
  constructor(
    private apiFrontFacadeService: ApiFrontFacadeService,
				private apiBackFacadeService: ApiBackFacadeService) { }

		private userValidate(isValidToken: boolean): boolean {
			if(isValidToken){
				this.apiFrontFacadeService.routeRedirect(['/home']);
				return false;
			} else {
				this.apiFrontFacadeService.removeToken('token');
				return true;
			}
		}

  canActivate(): Observable<boolean> {
			let sSToken: string = this.apiFrontFacadeService.getToken('token');
			if(sSToken){
				return this.apiBackFacadeService.tokenValidate(sSToken).pipe(
					map(response => {
							return this.userValidate(response.isValid);
						})
					)
			} else {
				return new Observable(observer => {
					observer.next(true);
				});
			}
  }

}
