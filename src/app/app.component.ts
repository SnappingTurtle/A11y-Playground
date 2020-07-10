import { Component } from '@angular/core';
import { Router  } from '@angular/router'
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

