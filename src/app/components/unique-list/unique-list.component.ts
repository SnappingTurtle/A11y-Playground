import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unique-list',
  templateUrl: './unique-list.component.html',
  styleUrls: ['./unique-list.component.scss']
})
export class UniqueListComponent implements OnInit {
  
  @Input() idFromParent: string;

  items: string[] = ['a', 'b', 'c'];
  constructor() { }

  ngOnInit(): void {
  }

}
