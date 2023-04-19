import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  hide: boolean = true;
  signInform: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(){
    this.signInform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}

export interface DialogInterface {
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  dialogHeader: string;
  dialogContent: string;
}