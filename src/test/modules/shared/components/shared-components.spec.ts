// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Assets
import { MaterialModule } from '@shared/material.module';
import { AlertDialogComponent } from '@shared/components/alert-dialog/alert-dialog.component';
import { ErrorInputComponent } from '@shared/components/error-input/error-input.component';
import alertDialogComponentTests from './alert-dialog/alert-dialog.component.spec';
import errorInputComponentTests from './error-input/error-input.component.spec';

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
				ErrorInputComponent
			],
			providers: [
				{provide: MatDialogRef},
				{provide: MAT_DIALOG_DATA}
			]
		}).compileComponents();
	}));

	alertDialogComponentTests();
	errorInputComponentTests();

});
