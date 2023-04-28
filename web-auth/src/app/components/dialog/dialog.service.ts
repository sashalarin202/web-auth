import { Injectable } from '@angular/core';
import { DialogComponent, DialogInterface } from './dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openSignInForm() {
    this.openDialog('Log in');
  }

  openSignUpForm() {
    this.openDialog('Sign Up');
  }

  private openDialog(title: string) {
    const dialogInterface: DialogInterface = {
      title: title,
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogInterface,
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.openSignUpForm()
      }
    });
  }
  
}
