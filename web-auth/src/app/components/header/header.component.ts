import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogInterface } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openSignInDialog() {
    this.openDialog('Log in');
  }

  openSignUpDialog() {
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
        this.openSignUpDialog()
      }
    });
  }
}
