import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inno-inno-wcag-input',
  templateUrl: './inno-wcag-input.component.html',
  styleUrls: ['./inno-wcag-input.component.scss']
})
export class InnoWcagInputComponent implements OnInit {

  @Input() idFromParent: string;
  @Input() listIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
