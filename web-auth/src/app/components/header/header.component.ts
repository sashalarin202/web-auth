import { Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialogService: DialogService){}
  openSignUpDialog() {
    this.dialogService.openSignUpForm()
  }

  openSignInDialog() {
    this.dialogService.openSignInForm()
  }
}
