// Dependencies
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class CsUtilsService {

	constructor(private datePipe: DatePipe, private currencyPipe: CurrencyPipe) { }

	applyDatePipe(actualDate: string, format: string = 'dd/MM/yyyy'): string {
		return this.datePipe.transform(actualDate, format);
	}

	applyCurrencyPipe(value: string, currencyCode: string = 'COP', display: string = '$'): string {
		return this.currencyPipe.transform(value, currencyCode, display);
	}

	handlerWhiteSpace(value: string): string {
		return value.split('  ').join(' ');
	}

	sortArray<A>(data: Array<A>, argument: string): Array<A> {
		return (data.sort((fe, se) => {
    if (fe[argument] < se[argument]) { return -1; }
    if (se[argument] < fe[argument]) { return 1; }
    return 0;
			}));
	}

	removeformatCurrency(value: string): string {
		return value.toString().split('$').join('').split(',').join('');
	}

	formatCurrency(val: string): string {
		const valCurrency = this.removeformatCurrency(val);
		if (isNaN(parseInt(valCurrency, 10))) {
			return val;
		}
		return this.applyCurrencyPipe(valCurrency);
	}

}
