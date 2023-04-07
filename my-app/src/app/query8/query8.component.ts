import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-query8',
  templateUrl: './query8.component.html',
  styleUrls: ['./query8.component.scss']
})
export class Query8Component {
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
    });
  }
}
