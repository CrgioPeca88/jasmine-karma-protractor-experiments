// Dependencies
import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChange, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Assets
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';

@Directive({
	selector: '[currencyFormatInputDirective]'
})
export class CurrencyFormatInputDirective implements OnChanges, AfterViewInit {

	private _formatterCOP;
	private _valuePreChargued: string;

	@Input() controlInput: FormControl;

	constructor(
		private apiFrontFacadeService: ApiFrontFacadeService,
		public element: ElementRef
	) {
		this._formatterCOP = new Intl.NumberFormat('es-CO', {
			style: 'currency',
			currency: 'COP',
			minimumFractionDigits: 0
		});
	}

	ngOnChanges(changes): void {
		this.handleControlInputChanges(changes);
	}

	ngAfterViewInit() : void {
		if(this._valuePreChargued) {
			this.controlInput.setValue(this._valuePreChargued);
			this.onBlur();
		}
	}

	private handleControlInputChanges(changes): void {
		if(changes.controlInput && changes.controlInput.currentValue && changes.controlInput.currentValue.value > 0) {
			this._valuePreChargued = this.fromStringToCurrencyFormat(changes.controlInput.currentValue.value);
		}
	}

	private fromStringToCurrencyFormat(stringValue: string): string {
		return this._formatterCOP.format(stringValue);
	}

	private fromCurrencyFormatToString(currencyFormatValue: string): string {
		const splitValue: string[] = currencyFormatValue.split("");
		const valueFiltered: string[] = splitValue.filter(number => !isNaN(parseInt(number)));
		return valueFiltered.toString().replace(/,/g, "");
	}

	private applyFormatStylesToElement(nativeElement, inputFSize: string,
		labelFSize: string, labelMarginTop: string, labelColor: string): void {
			nativeElement.style.fontSize = inputFSize;
			nativeElement.labels[0].style.fontSize = labelFSize;
			nativeElement.labels[0].style.marginTop = labelMarginTop;
			nativeElement.labels[0].style.color = labelColor;
	}

	@HostListener('input') onInput() {
		const reverseFormatted: string = this.fromCurrencyFormatToString(this.element.nativeElement.value);
		const valueFormatted: string = this.fromStringToCurrencyFormat(reverseFormatted);
		this.controlInput.setValue(valueFormatted);
	}

	@HostListener('blur') onBlur(labelColor: string = '#000000') {
		this.applyFormatStylesToElement(this.element.nativeElement, '0px', '22px', '21px', labelColor);
		const reverseFormatted: string = this.fromCurrencyFormatToString(this.element.nativeElement.value);
		this.element.nativeElement.labels[0].innerText = `${this.element.nativeElement.labels[0].innerText} ${this.element.nativeElement.value}`;
		this.controlInput.setValue(reverseFormatted);
	}

	@HostListener('focus') onFocus(labelColor: string = '#294690') {
		this.applyFormatStylesToElement(this.element.nativeElement, '16px', '16px', '0px', labelColor);
		const valueFormatted: string = this.fromStringToCurrencyFormat(this.element.nativeElement.value);
		this.element.nativeElement.labels[0].innerText = `${this.element.nativeElement.placeholder}`;
		this.controlInput.setValue(valueFormatted);
	}

}
