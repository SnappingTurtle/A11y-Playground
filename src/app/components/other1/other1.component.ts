import { Component, OnInit } from '@angular/core';
import { buttonsTs, otherHtml } from '../../snippets/buttons';
import 

@Component({
  selector: 'app-other1',
  templateUrl: './other1.component.html',
  styleUrls: ['./other1.component.scss']
})
export class Other1Component implements OnInit {

  items: string[] = ['a', 'b', 'c'];
  otherSnippet = buttonsTs;
  otherSnippetHTML = otherHtml;
  constructor() { }

  ngOnInit(): void {
  }

}
