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

  // Handling URL without any component (SignInComponent/SingUpCopmonent)
  ngOnInit(): void {
    const url = window.location.href;
    if (url.includes('/sign-in')) {
      this.openDialog('Log in', false);
    }if (url.includes('/sign-up')) {
      this.openDialog('Sign Up', true); 
    }
  }

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
      panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/mainPage'])
    });
  }
}
