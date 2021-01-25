import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CsIdleService {

    currentTime: Date;
    eventTime: Date;

    private _timeout: number;
    private _isTimeOut: boolean;
    private _urlsComponent: string[];

    constructor() {

        this.currentTime = new Date();
        this.eventTime = new Date();
    }

    /**
     * @author: John Nelson Rodríguez.
     * @description: get boolean value if timeout.
     */
    get isTimeOut() {
        return this._isTimeOut;
    }

    /**
     * @author: John Nelson Rodríguez.
     * @description: set value time to expire.
     * @param: value in milliseconds
     */
    set timeout(value: number) {
        this._timeout = value;
    }

    /**
     * @author: John Nelson Rodríguez.
     * @description: set component name value to skip to rule.
     * @param: message´s value
     */
    set urlComponentExclude(value: string[]) {
        this._urlsComponent = value;
    }

    /**
     * @author: John Nelson Rodríguez.
     * @description: start to track mouse clic event.
     * @return: Observer.
     */
    start(): Observable<any> {

        this.currentTime = new Date();

        this._timeout = this._timeout || 60000; // 1 minute by default.
        this._urlsComponent = this._urlsComponent || ['login'];

        return fromEvent(document, 'click')
            .pipe(map(() => {
                this.eventTime = new Date();

                const remaint = this.eventTime.getTime() - this.currentTime.getTime();

                this._isTimeOut = false;

                if ((remaint > this._timeout) && !this.existsUrl()) {

                    this._isTimeOut = true;
                }

                this.currentTime = new Date();
            }));
    }

    private existsUrl(): boolean {

        const currentUrl = window.location.href;
        const index = currentUrl.lastIndexOf('/');
        const length = currentUrl.length;
        const lengthComponent = length - index;

        const componentName = window.location.href.substr(index + 1, lengthComponent);

        return this._urlsComponent.includes(componentName);
    }


    /**
     * @author: John Nelson Rodríguez.
     * @description: close the modal.
     */
    close() {

        // this.modalService.dismissAll();
    }

}
