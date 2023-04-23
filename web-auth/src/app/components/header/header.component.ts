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
    this.router.navigate(['/sign-in'])
    this.openDialog('Log in', false);
  }

  openSignUpDialog() {
    this.openDialog('Sign Up', true);
  }

  private openDialog(title: string, confirmPassword: boolean) {
    const dialogInterface: DialogInterface = {
      title: title,
      confirmPassword: confirmPassword,
    };

    let dialogRef = this.dialog.open(DialogComponent, {
      data: dialogInterface,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/mainPage'])
    });
  }
}
