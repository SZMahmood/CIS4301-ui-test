import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/data.model';

interface Frequency {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent {
  frequencies: Frequency[] = [
    {value: 'annually-0', viewValue: 'Annually'},
    {value: 'semi-annually-1', viewValue: 'Semi-annually'},
    {value: 'triannually-2', viewValue: 'Triannually'},
  ];
  selectedValue = this.frequencies[0].value;

  constructor(
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


/*
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
  }*/