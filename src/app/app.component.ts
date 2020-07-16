import { Component } from '@angular/core';
import { Router  } from '@angular/router'
import { StepperTemplateComponent } from './components/stepper-wizard/stepper-template/stepper-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11yPlayground';
  options = TestOptions;
  mycolour = '#00ff0080';

  constructor(
    private router: Router
  ) {
    

  }

  onDelete() {
    
    this.router.navigate(['/radio']);
  }

  
}

export enum TestOptions {
  OPTION_ONE = 'option 1',
  OPTION_TWO = 'option 2',
}

