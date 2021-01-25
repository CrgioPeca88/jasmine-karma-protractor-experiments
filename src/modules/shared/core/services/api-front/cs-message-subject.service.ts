import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CsMessageSubjectService {

    subject: Subject<any>;
    subjectTabIndex: Subject<any>;
    behaviorSubject: BehaviorSubject<any>;
    currentBehaviorSubject: Observable<any>;

    constructor() {
        this.subject = new Subject<any>();
        this.subjectTabIndex = new Subject<any>();

        this.behaviorSubject = new BehaviorSubject<any>({ empty: null });
        this.currentBehaviorSubject = this.behaviorSubject.asObservable();
    }

    sendMessage(message: any): void {
    	this.subject.next({ message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    clearMessage(): void {
        this.subject.next();
    }
    // TAB INDEX:
    sendTabIndexValue(index: number): void {
        this.subjectTabIndex.next({ index });
    }

    getTabIndexValue(): Observable<number> {
        return this.subjectTabIndex.asObservable();
    }

    clearTabIndexValue(): void {
        this.subjectTabIndex.next();
    }

    changeBehaviorSubject(cObject: any): void {
        this.behaviorSubject.next(cObject);
    }

    isEmptyBehaviorSubject(): boolean {
        return this.behaviorSubject.value['empty'] === null;
    }

    emptyBehaviorSubject(): void {
        this.behaviorSubject = new BehaviorSubject<any>({ empty: null });
    }

}
