import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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

  hide: boolean = true;
  signInform: FormGroup;

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(event: boolean) {
    this.dialogRef.close(event);
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { title: string },
    public authService: AuthService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit() {
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
    });

    this.emailControl = this.signInform.get('email');
    this.passwordControl = this.signInform.get('password');
  }

  isButtonDisable() {
    return this.passwordControl?.errors?.['required'] ||
      this.emailControl?.errors?.['required'] ||
      this.emailControl?.errors?.['email'] ||
      this.emailControl?.invalid
  }

  clickContinue(userEmail: string, userPassword: string): void{
     this.data.title === 'Sign Ip' && this.authService.SignIn(userEmail, userPassword) ||
     this.authService.SignUp(userEmail, userPassword)
  }
}

export interface DialogInterface {
  title: string;
}