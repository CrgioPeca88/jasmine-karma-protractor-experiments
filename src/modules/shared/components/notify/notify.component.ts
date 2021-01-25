// Dependencies
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface NotifyComponentData {
	message: string;
	icon: string;
	messageType: string;
}

@Component({
	selector: 'cs-notify',
	templateUrl: './notify.component.html',
	styleUrls: ['./notify.component.less']
})
export class NotifyComponent implements OnInit {

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: NotifyComponentData
	) { }

	private validateParam(key: string, defaultValue: string): string {
		return ((this.data[key]) ? this.data[key] : defaultValue);
	}

	private initialParamsValidate() {
		this.data.messageType = this.validateParam('messageType', 'success');
	}

	ngOnInit() {
		this.initialParamsValidate();
	}

}
