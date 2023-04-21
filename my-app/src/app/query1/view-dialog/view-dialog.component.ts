import { Component } from '@angular/core';
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
  //selectedValue!: string;
  rangeSvalue!: number;
  rangeEvalue!: number;
  frequencies: Frequency[] = [
    {value: 'annually-0', viewValue: 'Annually'},
    {value: 'semi-annually-1', viewValue: 'Semi-annually'},
    {value: 'triannually-2', viewValue: 'Triannually'},
  ];
  selectedValue = this.frequencies[0].value;

  

}
