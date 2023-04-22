import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { DialogData } from '../data.model';

@Component({
  selector: 'app-query9',
  templateUrl: './query9.component.html',
  styleUrls: ['./query9.component.scss']
})
export class Query9Component {
  /*constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
    });
  }*/
  newInputs !: DialogData;
  constructor(public _matDialog: MatDialog) {}
  ngOnInit(): void {
  }
  onClick() {
    const dialogRef = this._matDialog.open(ViewDialogComponent,{
      height: '400px',
      width: '300px',
      data: { ... this.newInputs}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) return;

      
      console.log(`Setting Form closed:
          frequency: ${result.frequency}
          rangeStart: ${result.rangeStart}
          rangeEnd: ${result.rangeEnd}
          outputType: ${result.outputType}` 
        );
    });
  }
}
