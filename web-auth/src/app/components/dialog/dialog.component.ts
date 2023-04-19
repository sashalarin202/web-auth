import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  hide: boolean = true;
  constructor(
    private fb: FormBuilder
  ) { }

  signInform: FormGroup = this.fb.group({
    'email': ['', Validators.required, Validators.email],
    'password': ['', Validators.required]
  });
}
