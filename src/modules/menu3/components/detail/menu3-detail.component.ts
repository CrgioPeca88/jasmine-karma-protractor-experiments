// Dependencies
import { Component, Inject } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Menu3DetailDialogData {
	nId: string;
	documentTypeName: string;
	nInitialDate: string;
	nEndDate: string;
	cell: string;
	cId: string;
	absenceDays: string;
	nTypeName: string;
}

@Component({
	selector: 'menu3-detail',
	templateUrl: './menu3-detail.component.html',
	styleUrls: ['./menu3-detail.component.less']
})
export class Menu3DetailComponent {

	constructor(
	public menu3DetailDialogRef: MatDialogRef<Menu3DetailComponent>,
 	@Inject(MAT_DIALOG_DATA) public menu3DetailDialogData: Menu3DetailDialogData
	) { }

	onNoClick(): void {
		this.menu3DetailDialogRef.close();
	}

}
