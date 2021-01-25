//Dependencies
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

//Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad, CanActivate, CanActivateChild {

  constructor(
    private apiFrontFacadeService: ApiFrontFacadeService,
				private apiBackFacadeService: ApiBackFacadeService) { }

		private userValidate(isValidToken: boolean): boolean {
			if(isValidToken){
				return true;
			} else {
				this.apiFrontFacadeService.removeToken('token');
				this.apiFrontFacadeService.routeRedirect(['/login']);
				return false;
			}
		}

		private authenticatedGuardValidate(): Observable<boolean> {
			let sSToken: string = this.apiFrontFacadeService.getToken('token');
			if(sSToken){
				return this.apiBackFacadeService.tokenValidate(sSToken).pipe(
					map(response => {
							return this.userValidate(response.isValid);
						})
					)
			} else {
				return new Observable(observer => {
					observer.next(false);
				}).pipe(
					map((response: boolean) => {
						this.apiFrontFacadeService.routeRedirect(['/login']);
						return response;
					}));
			}
		}

		canLoad(): Observable<boolean> {
			return this.authenticatedGuardValidate();
		}

  canActivate(): Observable<boolean> {
			return this.authenticatedGuardValidate();
		}

		canActivateChild(): Observable<boolean> {
			return this.authenticatedGuardValidate();
		}

}
