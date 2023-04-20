import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  hide: boolean = true;
  hideConfirm: boolean = true;
  signInform: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)
    public data: {title: string, confirmPassword:boolean}) { }

  ngOnInit(){
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  isButtonDisable() {
    return this.signInform.controls['password'].errors?.['required']||
    this.signInform.controls['email'].errors?.['required'] ||
    this.signInform.controls['email'].errors?.['email'] ||
    this.data.title === 'Sign Up' &&
    this.signInform.controls['confirmPassword'].errors?.['required']
    }
}

export interface DialogInterface {
  title: string;
  confirmPassword: boolean;
}