// Dependencies
import { Injectable, NgZone } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// Assets
import { RouterInjectorService } from './injectors/router.injector';
import { TokenInjectorService } from './injectors/token.injector';
import { MaterialInjectorService } from './injectors/material.injector';
import { CustomErrorConfig, StatusCode } from '@shared/constants/custom-errors-config.enum';

@Injectable({
	providedIn: 'root'
})
export class CsErrorHandlerService implements ErrorHandler {

		private _defaultMsg: string;

		constructor(
			private routerInjectorService: RouterInjectorService,
			private tokenInjectorService: TokenInjectorService,
			private materialInjectorService: MaterialInjectorService,
			private ngZone: NgZone
		) {
			this._defaultMsg = 'Error en el sistema, intente de nuevo.';
		}

		private getHttpErrorMessage(defaultMsg: string, customConfig: CustomErrorConfig[], status: number): string {
			let message: string = defaultMsg;
			if (customConfig) {
				let configByStatus: any = customConfig.filter(config => config.statusCode === status);
				message = configByStatus.shift().message;
			}
			return message;
		}

		private getIcon(iconDefault: string, customConfig: CustomErrorConfig[], status: number): string {
			if(customConfig) {
				let configByStatus: CustomErrorConfig[] = customConfig.filter(config => config.statusCode === status);
				return (configByStatus[0].icon) ? configByStatus.shift().icon : iconDefault;
			} else {
				return iconDefault;
			};
		}

		private showHttpError(error: HttpErrorResponse, config?: CustomErrorConfig[]): void {
			switch(error.status) {
				case StatusCode.unauthorized: {
					let msg: string = this.getHttpErrorMessage('Error en la autenticación, ingrese de nuevo', config, error.status);
					this.ngZone.run(() => {
						this.materialInjectorService.getMaterialService().openDialog('report_problem', msg, '35%');
						this.tokenInjectorService.getTokenService().removeToken('token');
						this.routerInjectorService.getRouterService().routeRedirect(['/login']);
					});
     break;
   	}
				case StatusCode.bad_request: {
					let msg: string = this.getHttpErrorMessage('Error en el sistema, revise y vuelva a intentar', config, error.status);
					this.ngZone.run(() => {
						this.materialInjectorService.getMaterialService().openDialog(this.getIcon('report', config, error.status), msg, '35%');
					});
					break;
				}
				case StatusCode.not_found: {
					let msg: string = this.getHttpErrorMessage('Error en el sistema, revise y vuelva a intentar', config, error.status);
					this.ngZone.run(() => {
						this.materialInjectorService.getMaterialService().openDialog(this.getIcon('report', config, error.status), msg, '35%');
					});
					break;
				}
				default: {
					let msg = this.getHttpErrorMessage(this._defaultMsg, config, StatusCode.internal_server_error);
					this.ngZone.run(() => {
						this.materialInjectorService.getMaterialService().openDialog('report', msg, '35%');
					});
     break;
   	}
			}
		}

		private showError(customMsg?: string): void {
			let message : string = this._defaultMsg;
			if(customMsg) {
				message = customMsg;
			}
			this.materialInjectorService.getMaterialService().openDialog('report', message, '35%');
		}

		// Backend and Frontend Errors
		handleError(error): void {
    if (error instanceof HttpErrorResponse) {
					console.error("[BACK-HTTP ERROR !!! No controlado]", error);
					this.showHttpError(error);
				} else {
					console.error("[FRONT ERROR !!! No controlado]", error);
					this.showError();
				}
  }

		// Custom backend Errors
		handleHttpErrorManually(error: HttpErrorResponse, config: CustomErrorConfig[]) {
			this.showHttpError(error, config);
		}

		// Custom frontend Errors
		handleErrorManually(error: Error) {
			this.showError(error.message);
		}

}
