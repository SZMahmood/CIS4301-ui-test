import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-query5',
  templateUrl: './query5.component.html',
  styleUrls: ['./query5.component.scss']
})
export class Query5Component {
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
    });
  }
}
