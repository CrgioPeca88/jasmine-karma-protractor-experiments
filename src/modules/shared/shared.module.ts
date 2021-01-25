// Dependencies
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Assets
import { HeaderComponent } from './components/header/header.component';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { NotifyComponent } from './components/notify/notify.component';
import { MaterialModule } from './material.module';
import { Menu3DetailComponent } from '@menu3/components/detail/menu3-detail.component';
import { CurrencyFormatInputDirective } from './core/directives/currency-format-input.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule
	],
	entryComponents: [
		AlertDialogComponent,
		NotifyComponent,
		Menu3DetailComponent
	],
	declarations: [
		HeaderComponent,
		ErrorInputComponent,
		AlertDialogComponent,
		NotifyComponent,
		Menu3DetailComponent,
		CurrencyFormatInputDirective
	],
	providers: [
		DatePipe,
		CurrencyPipe
	],
	exports: [
		FormsModule,
		HeaderComponent,
		ErrorInputComponent,
		MaterialModule,
		ReactiveFormsModule,
		CommonModule,
		CurrencyFormatInputDirective
	]
})
export class SharedModule { }
