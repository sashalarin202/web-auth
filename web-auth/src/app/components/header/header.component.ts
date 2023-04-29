import { Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialogService: DialogService, private authService: AuthService){}

  isLoggedIn(){
    console.log(this.authService.isLoggedIn)
     return !this.authService.isLoggedIn
  }


  openSignUpDialog() {
    this.dialogService.openSignUpForm()
  }

  openSignInDialog() {
    this.dialogService.openSignInForm()
  }
}
