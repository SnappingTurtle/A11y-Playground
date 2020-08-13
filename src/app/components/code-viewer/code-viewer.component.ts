import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { HighlightService } from '../../services/highlight-service.service';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit, AfterViewChecked {

  @Input() snippet: string;
  codeContent: any = {};
  highlighted: boolean = false;
  constructor(
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
    this.codeContent = this.snippet;

    /* this.codeContent = `
            <pre><code class=\"language-typescript\">@Component({
              selector: 'app-code-viewer',
              templateUrl: './code-viewer.component.html',
              styleUrls: ['./code-viewer.component.scss']
            })</code></pre>
          `; */
  }

  ngAfterViewChecked() {
    if (this.codeContent && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
