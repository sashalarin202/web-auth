import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogInterface } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {

    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
    };

    this.dialog.open(DialogComponent,{
      width: '300px',
      data: dialogInterface,
    });
  }
}
