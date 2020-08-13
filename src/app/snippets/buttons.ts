export let buttonsTs = `
<pre class=\"line-numbers language-typescript\" data-line=\"1,3\">
<code>
    @Component({
        selector: 'app-code-viewer',
        templateUrl: './code-viewer.component.html',
        styleUrls: ['./code-viewer.component.scss']
    })
</code>
</pre>
`;

export let otherHtml = `
<script type="text/plain" class="language-markup">
<div class="component-wrapper">
    <ul>
        <li *ngFor="let item of items; let i = index" [attr.data-index]="i">
            <inno-inno-wcag-input [idFromParent]="'danno'" [listIndex]="i">
            </inno-inno-wcag-input>
        </li>
    </ul>
</div>
<app-code-viewer [snippet]="otherSnippet"></app-code-viewer>
<app-code-viewer [snippet]="otherSnippetHTML"></app-code-viewer>
</script>
`;