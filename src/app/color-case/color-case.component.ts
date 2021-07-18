import { Component, OnInit } from '@angular/core';
// import { ViewEncapsulation} from '@angular/core';
// import {FormControl} from '@angular/forms';

// interface Food {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-color-case',
  templateUrl: './color-case.component.html',
  styleUrls: ['./color-case.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ColorCaseComponent implements OnInit {
// export class ColorCaseComponent  {

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  // panelColor = new FormControl('red');

  constructor() { }

  ngOnInit(): void {
   
  }

}
