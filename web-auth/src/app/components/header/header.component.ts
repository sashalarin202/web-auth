import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogInterface } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openSignInDialog() {
    const dialogInterface: DialogInterface = {
      title: 'Log in',
      confirmPassword: false,
    };

    this.dialog.open(DialogComponent,{
      data: dialogInterface,
    });
  }

  openSignUpDialog() {
    const dialogInterface: DialogInterface = {
      title: 'Sign Up',
      confirmPassword: true,
    };

    this.dialog.open(DialogComponent,{
      data: dialogInterface,
    });
  }
}
