import { Component, EventEmitter, Inject, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  resetPasswordform: FormGroup;

  @ViewChild('forgotPassword') secondDialogTemplate: TemplateRef<any>;

  @Output() buttonClick = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string },
    private fb: FormBuilder,
    public authService: AuthService,
    public dialogRef: MatDialogRef<DialogComponent>,
    private dialog: MatDialog
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
     this.data.title === 'Sign Ip' && this.authService.SignUp(userEmail, userPassword) ||
     this.authService.SignIn(userEmail, userPassword)
  }

  onButtonClick(event: boolean) {
    this.dialogRef.close(event);
  }

  getError(form:FormGroup): boolean {
    const control = form.get('email');
    return !!control?.errors && (control.touched || control.dirty && !control.errors['required']);
  }

  openFPdDialog() {
    this.dialog.closeAll()
    this.resetPasswordform = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
    this.emailControl = this.resetPasswordform.get('email');

    this.dialog.open(this.secondDialogTemplate,{
      panelClass: 'custom-dialog'
    });
  }
}

export interface DialogInterface {
  title: string;
}