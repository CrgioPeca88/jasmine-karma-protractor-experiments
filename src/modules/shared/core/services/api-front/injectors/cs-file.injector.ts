// Dependencies
import { Injectable, Injector } from '@angular/core';


// Assets
import { CsFileService } from '@modules/shared/core/services/api-front/cs-file.service';

@Injectable({
    providedIn: 'root'
})
export class CsFileInjectorService {

    private _csFileService: CsFileService;

    constructor(private injector: Injector) { }

    public getCsSaveFileService(): CsFileService {
        if (!this._csFileService) {
            this._csFileService = this.injector.get(CsFileService);
        }
        return this._csFileService;
    }

}