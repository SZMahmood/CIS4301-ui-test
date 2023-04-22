import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/data.model';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// ----------------- Button -----------------
@Component({
  selector: 'app-query1',
  templateUrl: './query1.component.html',
  styleUrls: ['./query1.component.scss'],
  
})


export class Query1Component implements OnInit {
  newInputs !: DialogData;
  constructor(public _matDialog: MatDialog) {}
  ngOnInit(): void {
  }
  onClick() {
    const dialogRef = this._matDialog.open(Query1DialogComponent,{
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


// ----------------- [Populate] Form -----------------

interface Frequency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-query1-dialog',
  templateUrl: './query1-dialog.component.html',
  styleUrls: ['./query1.component.scss']
})
export class Query1DialogComponent implements OnInit {
  //selectedValue!: string;
  //rangeSvalue!: number;
  //rangeEvalue!: number;
  
  frequencies: Frequency[] = [
    {value: 'annually-0', viewValue: 'Annually'},
    {value: 'semi-annually-1', viewValue: 'Semi-annually'},
    {value: 'triannually-2', viewValue: 'Triannually'},
  ];
  selectedValue = this.frequencies[0].value;

  constructor(
    public dialogRef: MatDialogRef<Query1DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
