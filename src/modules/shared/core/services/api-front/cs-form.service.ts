// Dependencies
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl,
	ValidatorFn, Validators, FormControl, ValidationErrors } from '@angular/forms';

enum ControlStatus {
	valid = 'VALID',
	invalid = 'INVALID',
}
Object.freeze(ControlStatus);

@Injectable({
	providedIn: 'root'
})
export class CsFormService {

	private _onlyNumbersPattern: string;
	private _onlyNumbersAndAlphabets: string;

	constructor(private formBuilder: FormBuilder) {
		this._onlyNumbersPattern = '^[0-9]*$';
		this._onlyNumbersAndAlphabets = '^[a-zA-Z0-9Ññ]*$';
	}

	getOnlyNumbersPattern(): string {
		return this._onlyNumbersPattern;
	}

	createControl(): FormControl {
		return new FormControl();
	}

	createControlWithValidators(form: FormGroup, controlName: string, validators: ValidatorFn[]): void {
		let control: FormControl = this.createControl();
		this.setControlsValidators(control, validators);
		this.addControlToForm(form, controlName, control);
	}

	setControlsValidators(control: FormControl, validators: ValidatorFn[]): void {
		control.setValidators(validators);
	}

	addControlToForm(form: FormGroup, controlName: string, control: FormControl): void {
		form.addControl(controlName, control);
	}

	removeControlToForm(form: FormGroup, controlName: string): void {
		form.removeControl(controlName);
	}

	isFormControlValid(control: AbstractControl): boolean {
		return (control.status === ControlStatus.valid);
	}

	getAddForm(): FormGroup {
			return this.formBuilder.group({
				'documentType': ['', [
					Validators.required
				]],
				'documentNumber': ['', [
					Validators.required,
					Validators.minLength(5)
				]],
				'type': ['', [
					Validators.required
				]],
				'initialDate': ['', [
					Validators.required
				]],
				'endDate': ['', [
					Validators.required
				]],
				'disccount': ['', [
					Validators.required
				]]
			});
	}

	getModifyForm(): FormGroup {
		return this.formBuilder.group({
			'type': ['', [
				Validators.required
			]],
			'initialDate': ['', [
				Validators.required
			]],
			'endDate': ['', [
				Validators.required
			]],
			'disccount': ['', [
				Validators.required
			]]
		});
	}

	getInputErrors(formGroup: FormGroup, inputName: string): ValidationErrors {
		return formGroup.get(inputName).errors;
	}

}
