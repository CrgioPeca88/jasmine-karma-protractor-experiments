// Dependencies
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

//Assets
import { TokenInterceptor } from '@cs-core/interceptors/token.interceptor';
import { ErrorsInterceptor } from '@cs-core/interceptors/errors.interceptor';
import { CsErrorHandlerService } from '@cs-core/services/api-front/cs-error-handler.service';
import { Page404Component } from './components/page404/page404.component';
import { AppComponent } from './components/root/app.component';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { VehiclesModule } from '@vehicles/vehicles.module';

@NgModule({
		imports: [
			BrowserModule,
			BrowserAnimationsModule,
			SharedModule,
			HttpClientModule,
			AppRoutingModule,
			VehiclesModule
		],
		declarations: [
   		Page404Component,
			AppComponent
  	],
		providers: [
			{ provide: ErrorHandler, useClass: CsErrorHandlerService },
			{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
			{ provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true }
		],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(router: Router) { }
}
