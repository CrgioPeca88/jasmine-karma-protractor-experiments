// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Assets
import { MaterialModule } from '@shared/material.module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ErrorInputComponent } from './error-input/error-input.component';
import { IdleComponent } from './idle/idle.component';
import alertDialogComponentTests from './alert-dialog/alert-dialog.component.spec';
import errorInputComponentTests from './error-input/error-input.component.spec';
import idleComponentTests from './idle/idle.component.spec';

describe('*[SharedModule]: -------------------------------------------', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CommonModule,
				FormsModule,
				MaterialModule,
				ReactiveFormsModule,
				RouterTestingModule
			],
			declarations: [
				AlertDialogComponent,
				ErrorInputComponent,
				IdleComponent
			],
			providers: [
				{provide: MatDialogRef},
				{provide: MAT_DIALOG_DATA}
			]
		}).compileComponents();
	}));

	alertDialogComponentTests();
	errorInputComponentTests();
	idleComponentTests();

});
