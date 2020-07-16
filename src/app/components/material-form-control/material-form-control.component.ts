import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-material-form-control',
  templateUrl: './material-form-control.component.html',
  styleUrls: ['./material-form-control.component.scss']
})
export class MaterialFormControlComponent implements OnInit {

  constructor() { }

  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
