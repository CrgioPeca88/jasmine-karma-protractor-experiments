// Dependencies
import { Injectable, Type } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

// Assets
import { AlertDialogComponent, ConfigDialog } from '@shared/components/alert-dialog/alert-dialog.component';
import { NotifyComponent } from '@shared/components/notify/notify.component';

@Injectable({
	providedIn: 'root'
})
export class MaterialMockService {

	constructor(
		private matDialog: MatDialog,
		private snackBar: MatSnackBar) { }

	private open<C>(data, widthDialog: string, component: Type<C>): MatDialogRef<C> {
		return ({ afterClosed: () => of(true) } as MatDialogRef<C>);
	}

	openDialog (
		icon: string,
		msg: string,
		widthDialog: string,
		isConfirmDialog?: boolean,
		configDialog?: ConfigDialog
	) : MatDialogRef<AlertDialogComponent> {
		return this.open<AlertDialogComponent>(undefined, widthDialog, AlertDialogComponent);
	}

	openComponentDialog<C>(data: any, widthDialog: string, component: Type<C>) : MatDialogRef<C> {
		return this.open<C>(data, widthDialog, component);
	}

	showNotify(message: string, icon: string, duration: number, messageType?: string): void {
		const flagShowNotify: string = 'showNotify used';
		console.log(`${flagShowNotify}`);
	}

}
