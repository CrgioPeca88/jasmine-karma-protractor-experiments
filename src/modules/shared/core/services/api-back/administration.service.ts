// Dependencies
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AdministrationService {

	constructor() { }

	modalTest(): Observable<any> {
		return of({
			status: 200,
			statusText: 'OK',
		});
	}

}
