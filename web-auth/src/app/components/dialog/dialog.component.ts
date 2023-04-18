import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  hide: boolean = true;

  

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  // signInForm = new FormGroup({
  //   emailFormControl: new FormControl('', [Validators.required, Validators.email])
  //   passwordFormControl: new FormControl('', [Validators.required, Validators.email ])
  // });
}
