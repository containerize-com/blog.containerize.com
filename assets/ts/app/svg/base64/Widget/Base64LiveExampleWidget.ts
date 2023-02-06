import { LiveExampleWidget } from '../../../html/LiveExampleWidget';
import '../../../html/string.extensions';

export class Base64LiveExampleWidget extends LiveExampleWidget {
   
    readonly inner: string
    core:any;

    constructor(placeholderId: string) 
    {
        var placeholder = <HTMLElement>document.getElementById(placeholderId);
        var template = require('./templates/layout.html').layout.toHTMLElement();
        super(placeholder, template);
        
        this.inner = (<HTMLElement>placeholder.querySelector('#inner')).innerHTML;
    }

    init(): void {
        this.initJsCore();
    }

    show(): void {
        this.enableEvents();
        this.placeholder.appendChild(this.template);

        if(!this.inner.isNullOrWhiteSpace()){
            var code  = window.hljs.highlight(this.inner, {language: 'csharp'}).value;
            var el = <HTMLElement>this.template.querySelector('#snippet');
            el.classList.remove('hidden');
            el.innerHTML = code;
        }
        super.show();
    }

    loadFile(path: string){
        console.log(this.core);
        this.core.downloadUrl(path);
    }

    enableEvents(): void{
       
    }

    private initJsCore():void{
        this.core = window['initAppSvgBase64Encoder'](this.template);
    }
}