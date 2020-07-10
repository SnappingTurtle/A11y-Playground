import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-radio-control',
  templateUrl: './material-radio-control.component.html',
  styleUrls: ['./material-radio-control.component.scss']
})
export class MaterialRadioControlComponent implements OnInit {

  options = TestOptions;
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(e: any) {
    
  }

}
export enum TestOptions {
  OPTION_ONE = 'option 1',
  OPTION_TWO = 'option 2',
}
