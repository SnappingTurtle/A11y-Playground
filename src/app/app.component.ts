import { Component } from '@angular/core';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatButton } from '@angular/material/button';
// import { MatIcon } from '@angular/material/icon';
// import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11yPlayground';
  options = TestOptions;

  constructor() {

  }

  selectDuration(e: any) {
    alert('zubida');
  }
}

export enum TestOptions {
  OPTION_ONE = 'option 1',
  OPTION_TWO = 'option 2',
}

