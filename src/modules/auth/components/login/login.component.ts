// Dependencies
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

// Assets
import { ApiBackFacadeService } from '@cs-core/services/api-back-facade.service';
import { ApiFrontFacadeService } from '@cs-core/services/api-front-facade.service';
import { CUSTOM_ERRORS_LOGIN_CONFIG } from '@shared/constants/custom-errors-config.enum';

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

	public _loginFormGroup: FormGroup;
	public _showFormErrors: boolean;
	public _hide: boolean;

	constructor(
		private apiBackFacadeService: ApiBackFacadeService,
		private apiFrontFacadeService: ApiFrontFacadeService,
		private formBuilder: FormBuilder
	) {
		this._hide = true;
	}

	ngOnInit() {
		this.buildLoginForm();
	}

	buildLoginForm() {
		this._loginFormGroup = this.formBuilder.group({
			'userName': ['', [
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(20)
			]],
			'password': ['', [
				Validators.required
			]]
		});
	}

	handleToken(token: string): void {
		this.apiFrontFacadeService.setToken('token', token);
		this.apiFrontFacadeService.routeRedirect(['/home']);
	}

	login(): void {
		if (this._loginFormGroup.valid) {
			let userName: string = this._loginFormGroup.value.userName;
			let password: string = this._loginFormGroup.value.password;
			this.apiBackFacadeService.login(userName, password).subscribe((response) => {
				(response.token) ? this.handleToken(response.token) : console.error("[CS][Error Controlado login 1]");
			},
			(error: HttpErrorResponse) => {
				this.apiFrontFacadeService.handleHttpErrorManually(error, CUSTOM_ERRORS_LOGIN_CONFIG);
			});
		} else {
			this._showFormErrors = true;
		}
	}

	getInputErrors(inputName: string): ValidationErrors {
		return this._loginFormGroup.get(inputName).errors;
	}

}
