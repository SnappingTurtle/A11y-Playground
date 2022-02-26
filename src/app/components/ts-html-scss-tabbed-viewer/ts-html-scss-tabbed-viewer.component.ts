import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { buttonsTs, otherHtml } from '../../snippets/buttons';
import { HighlightService } from '../../services/highlight-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'eval-ts-html-scss-tabbed-viewer',
  templateUrl: './ts-html-scss-tabbed-viewer.component.html',
  styleUrls: ['./ts-html-scss-tabbed-viewer.component.scss']
})
export class TsHtmlScssTabbedViewerComponent implements OnInit, AfterViewChecked, AfterContentInit {

  @Input() markup: string; // component html file url
  @Input() typescript: string; // component typescript file url
  @Input() css: string; // component css file url
  @Input() usage: string; // markup usage of component
  @Input() markdown: string; // doc showing features
  
  testCodeLink = 'assets/codeview/app-routing.module.ts.codeview';
  otherSnippet = otherHtml;
  hasLineNumbers = true;
  testURL = '';
  baseURL = '';
  //testURL = 'http://localhost:5555' + '/assets/codeview/app.component.html';
  constructor(
    private highlightService: HighlightService) {
      this.baseURL = environment.baseURL;
      this.testURL = environment.baseURL + '/assets/codeview/app.component.html';
    }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.testURL = environment.baseURL + '/assets/codeview/app.component.html';
    alert(environment.baseURL);
  }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }

}
