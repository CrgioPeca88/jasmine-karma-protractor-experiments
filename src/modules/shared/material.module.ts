// Dependencies
import { NgModule } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';
import { NativeDateAdapter, MatExpansionModule } from '@angular/material';
import { MatDateFormats } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

export class CsDateAdapter extends NativeDateAdapter {
	format(date: Date, displayFormat: Object): string {
 	if (displayFormat === 'input') {
			let day: number = date.getDate();
  	let month: number = date.getMonth() + 1;
  	let year = date.getFullYear();
  	return `${day}/${month}/${year}`;
  }
  return date.toDateString();
 }
}

export const CS_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

@NgModule({
	imports: [
		MatNativeDateModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		MatDatepickerModule,
		MatIconModule,
		MatGridListModule,
		MatMenuModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatChipsModule,
		MatTableModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatRadioModule,
		MatTabsModule,
		MatSortModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatStepperModule
	],
	providers: [
		{ provide: DateAdapter, useClass: CsDateAdapter, deps: [MAT_DATE_FORMATS, Platform]},
  { provide: MAT_DATE_FORMATS, useValue: CS_DATE_FORMATS}
	],
	exports: [
		MatNativeDateModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
		MatDatepickerModule,
		MatIconModule,
		MatGridListModule,
		MatMenuModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatChipsModule,
		MatTableModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatRadioModule,
		MatTabsModule,
		MatSortModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatStepperModule
	]
})
export class MaterialModule { }
