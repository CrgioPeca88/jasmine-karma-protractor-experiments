// Dependencies
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class RouterService {

	constructor(private router: Router, private _location: Location) { }

	routeRedirect(routePath: string[], navigationExtras?: NavigationExtras) {
		this.router.navigate(routePath, navigationExtras);
	}

	getPathParams(activatedRoute: ActivatedRoute): any {
		let pathParams = activatedRoute.snapshot.params;
		return pathParams;
	}

	getQueryParams<T>(activatedRoute: ActivatedRoute): T {
		return activatedRoute.snapshot.queryParams as T;
	}

	goToBack(): void {
		this._location.back();
	}
}
