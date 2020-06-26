import { Component } from '@angular/core';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11yPlayground';
  options = TestOptions;
}

export enum TestOptions {
  OPTION_ONE = 'option 1',
  OPTION_TWO = 'option 2',
}
