import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-query6',
  templateUrl: './query6.component.html',
  styleUrls: ['./query6.component.scss']
})
export class Query6Component {
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
    });
  }
}
