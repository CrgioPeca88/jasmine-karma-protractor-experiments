// Dependencies
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';

@Injectable({
	providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

	constructor(private apiFrontFacadeService: ApiFrontFacadeService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
			let requestClone: HttpRequest<any> = req;
			let token: string = this.apiFrontFacadeService.getToken('token');
			if(token) {
				requestClone = req.clone({
					setHeaders: {
						Authorization: `Bearer ${ token }`
					}
				});
			}
			return next.handle(requestClone);
		}

}
