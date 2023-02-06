import { LiveExampleWidget } from '../../LiveExampleWidget';
import '../../string.extensions';

export class GeneratorsLiveExampleWidget extends LiveExampleWidget {
    
    readonly options: HTMLElement
    readonly preview: HTMLElement
    readonly codeSnippetHtml: HTMLElement
    readonly codeSnippetCSharp: HTMLElement
    readonly description: string

    constructor(
        placeholderId: string, 
        options: HTMLElement,
        placeholder: HTMLElement | undefined = undefined,
        template: HTMLElement | undefined = undefined,
        preview: HTMLElement | undefined = undefined,
        codeSnippetHtml: HTMLElement | undefined = undefined,
        codeSnippetCSharp: HTMLElement | undefined = undefined)
    {
        super(
            placeholder ?? <HTMLElement>document.getElementById(placeholderId), 
            template ?? require('./../templates/layout.html').layout.toHTMLElement());

        this.options = options;
        this.preview = preview ?? require('./../templates/layout.html').preview.toHTMLElement();
        this.codeSnippetHtml = codeSnippetHtml ?? require('./../templates/layout.html').codeSnippetHtml.toHTMLElement();
        this.codeSnippetCSharp = codeSnippetCSharp ?? require('./../templates/layout.html').codeSnippetCSharp.toHTMLElement();
        this.description = (<HTMLElement>this.placeholder.querySelector('template')).innerHTML;
    }

    enableEvents(): void{
        this.enableOptionsEvents();

        var actions = <HTMLElement>this.codeSnippetHtml.querySelector('#actions');
        
        var download = this.createDownloadPanelButton();
        download.addEventListener('click', () => {
            this.downloadContent('demo.html', this.getHtmlCodeSnippet());
        });
        actions.appendChild(download);

        var clipboard = this.createClipboardPanelButton();
        clipboard.addEventListener('click', () => {
            navigator.clipboard.writeText(this.getHtmlCodeSnippet());
        });
        actions.appendChild(clipboard);
        
        var actions = <HTMLElement>this.codeSnippetCSharp.querySelector('#actions');
        var clipboard = this.createClipboardPanelButton();
        clipboard.addEventListener('click', () => {
            navigator.clipboard.writeText(this.getCSharpCodeSnippet());
        });
        actions.appendChild(clipboard);
    }

    enableOptionsEvents(){
        const elements = this.options.querySelectorAll('input, select, textarea');
        elements.forEach(element => this.addOptionEventListener(<HTMLElement>element));
    }

    protected addOptionEventListener(element: string | HTMLElement, listener: EventListenerOrEventListenerObject = ev => this.repaintCodeSnippets()): void{

        let el : HTMLElement;
        if (typeof element === "string") {
            el = this.options.querySelector(`#${element}`)!;
        }else{
            el = element;
        }
        
        if (el instanceof HTMLSelectElement) {
            el.addEventListener("change", listener);
        }
        else if (el instanceof HTMLInputElement) {
            el.addEventListener("input", listener);
        }
        else if (el instanceof HTMLTextAreaElement) {
            el.addEventListener("input", listener);
        } 
        else 
        {
            console.log('Unknown options type.');
            throw new Error('Unknown options type.');
        }
    }

    show(): void {
        var el = <HTMLElement>this.template.querySelector('#options');
        el.appendChild(this.options)

        el = <HTMLElement>this.template.querySelector('#preview');
        el.appendChild(this.preview);

        el = <HTMLElement>this.template.querySelector('#codeSnippetHtml');
        el.appendChild(this.codeSnippetHtml);

        el = <HTMLElement>this.template.querySelector('#codeSnippetCSharp');
        el.appendChild(this.codeSnippetCSharp);
        
        
        this.enableEvents();
        this.repaintCodeSnippets();

        el = <HTMLElement>this.template.querySelector('#description');
        if(this.description.trim().length !== 0){  
            el.innerHTML = this.description;
        }else{
            el.style.visibility = "hidden";
        }

        this.placeholder.appendChild(this.template);

        super.show();
    }

    repaintCodeSnippets(): void {

        // HTML code snippet
        let code = this.getHtmlCodeSnippet();
        let el = <HTMLElement>this.preview.querySelector('#placeholder');
        el.innerHTML = code

        el = <HTMLElement>this.codeSnippetHtml.querySelector('#placeholder'); 
        let html = window.hljs.highlight(code, {language: 'xml'}).value;
        el.innerHTML = html;

        // C# code snippet
        code = this.getCSharpCodeSnippet();
        el = <HTMLElement>this.codeSnippetCSharp.querySelector('#placeholder'); 
        html = window.hljs.highlight(code, {language: 'csharp'}).value;
        el.innerHTML = html;
    }

    getCSharpCodeSnippet(): string
    {
        return '';
    }

    getHtmlCodeSnippet(): string
    {
        return '';
    }

    getOption<T>(id: string): T
    {
        var element = this.options.querySelector(`#${id}`);
        if (element instanceof HTMLSelectElement) {
            let result = element.options[element.selectedIndex].value;
            return <T><Object>result;
        }
        else if (element instanceof HTMLInputElement) {
            var input = <HTMLInputElement>element;
            if(input.type === 'checkbox')
                return <T><Object>input.checked;
            return <T><Object>input.value;
        }
        else if (element instanceof HTMLTextAreaElement) {
            return <T><Object>element.value;
        } 
        else 
        {
            console.log('Unknown options type.');
            throw new Error('Unknown options type.');
        }
    }
}
