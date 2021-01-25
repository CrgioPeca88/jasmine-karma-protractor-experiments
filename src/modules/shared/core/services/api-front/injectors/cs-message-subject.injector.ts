// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { CsMessageSubjectService } from '@cs-core/services/api-front/cs-message-subject.service';

@Injectable({
    providedIn: 'root'
})
export class CsMessageSubjectInjectorService {

    private _csMessageSubjectService: CsMessageSubjectService;

    constructor(private injector: Injector) { }

    public getCsMessageSubjectService(): CsMessageSubjectService {
        if (!this._csMessageSubjectService) {
            this._csMessageSubjectService = this.injector.get(CsMessageSubjectService);
        }
        return this._csMessageSubjectService;
    }

}
