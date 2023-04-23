import { Component, Inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  emailControl: AbstractControl | null;
  passwordControl: AbstractControl | null;
  confirmPasswordControl: AbstractControl | null;

  hide: boolean = true;
  hideConfirm: boolean = true;
  signInform: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, confirmPassword: boolean },
    public authService: AuthService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w.]+@\w+$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.emailControl = this.signInform.get('email');
    this.passwordControl = this.signInform.get('password');
    this.confirmPasswordControl = this.signInform.get('confirmPassword');
  }

  isButtonDisable() {
    const emailErrors = this.emailControl?.errors;
    const passwordErrors = this.passwordControl?.errors;
    const confirmPasswordErrors = this.confirmPasswordControl?.errors;
    return passwordErrors?.['required'] ||
      emailErrors?.['required'] ||
      emailErrors?.['email'] ||
      (this.data.title === 'Sign Up' && confirmPasswordErrors?.['required']);
  }
}

export interface DialogInterface {
  title: string;
  confirmPassword: boolean;
}