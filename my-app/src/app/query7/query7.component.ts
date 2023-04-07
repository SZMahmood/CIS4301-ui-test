import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-query7',
  templateUrl: './query7.component.html',
  styleUrls: ['./query7.component.scss']
})
export class Query7Component {
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
    });
  }
}
