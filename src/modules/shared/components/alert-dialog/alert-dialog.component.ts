// Dependencies
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertDialogData {
	icon: string;
	message: string;
	isConfirmDialog?: boolean;
	config?: ConfigDialog;
}

export interface ConfigDialog {
	buttonOk: string;
	buttonCancel: string;
}

@Component({
	selector: 'alert-dialog',
	templateUrl: './alert-dialog.component.html',
	styleUrls: ['./alert-dialog.component.less']
})
export class AlertDialogComponent implements OnInit {

	alertConfigConfirm: ConfigDialog;

	constructor(
		public alertDialogRef: MatDialogRef<AlertDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public alertDialogData: AlertDialogData
	) {
		this.alertConfigConfirm = {
			buttonOk: 'Aceptar',
			buttonCancel: 'Cancelar'
		}
	}

	ngOnInit() {
		this.validateButton();
	}

	validateButton() {
		if (this.alertDialogData && this.alertDialogData.config) {
			this.alertConfigConfirm = this.alertDialogData.config;
		}
	}

	accept() {
		return true;
	}

	onNoClick(): void {
		this.alertDialogRef.close();
	}

}
