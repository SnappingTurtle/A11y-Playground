import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stepper-template',
  templateUrl: './stepper-template.component.html',
  styleUrls: ['./stepper-template.component.scss']
})
export class StepperTemplateComponent implements OnInit {

  @Input() stepText: string;
  @Input() stepIcon: string;
  mycolour = '#0000ff20';
  strokeWidth = '.6';
  strokeColour = '#ffffff40';

  constructor() { }

  ngOnInit(): void {
  }

}
