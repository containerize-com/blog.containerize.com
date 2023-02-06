export const layout = `
<div class='app-html-generator'>
    <div class="row g-3">
        <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="header">Options</div>
            <div class="options card-border" id="options"></div>
        </div>
        <div class="col-md-6 col-lg-8 col-xl-8">
            <div class='row pb-2'>
                <div class='col' id='preview'></div>
            </div>
            <div class="row"><div class='col' id='codeSnippetHtml'></div></div>
        </div>
        <div class="col-md-12 col-lg-12 col-xl-12 my-1"><div class='col' id='description'></div></div>
        <div class="col-md-12 col-lg-12 col-xl-12 my-1" id='code-native'><div class='col' id='codeSnippetCSharp'></div></div>
    </div>
    
</div>
`;

export const preview = `
<div>
    <div class="header">
        <div class='row'>
            <div class='col'>Preview</div>
        </div>
    </div>
    <div class="preview card-border" id='placeholder'>
    </div>
</div>
`

export const codeSnippetHtml = `
<div class='codeblock'>
    <div class="header">
        <div class='row'>
            <div class='col'>HTML Code</div>
            <div class='col-auto'><div class='row' id="actions"></div></div>
        </div>
    </div>
    <pre class="m-0 mxh-400"><code class="hljs html" id='placeholder'></code></pre>
    <div class="footer">&nbsp;</div>
</div>
`

export const codeSnippetCSharp = `
<div class='codeblock'>
    <div class="header">
        <div class='row'>
            <div class='col'>C# Code</div>
            <div class='col-auto'><div class='row' id="actions"></div></div>
        </div>
    </div>
    <pre><code class="hljs csharp" id='placeholder'></code></pre>
</div>
`

export const panelBtnDownload = `
<a class="action-button">
    <span class="tooltip">Download</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
    </svg>
</a>
`
export const panelBtnClipboard = `
<a class="action-button">
    <span class="tooltip">Copy to clipboard</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
    </svg>
</a>
`