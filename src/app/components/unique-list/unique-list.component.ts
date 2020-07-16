import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unique-list',
  templateUrl: './unique-list.component.html',
  styleUrls: ['./unique-list.component.scss']
})
export class UniqueListComponent implements OnInit {

  items: string[] = ['a', 'b', 'c', 'd'];
  constructor() { }

  ngOnInit(): void {
  }

}
