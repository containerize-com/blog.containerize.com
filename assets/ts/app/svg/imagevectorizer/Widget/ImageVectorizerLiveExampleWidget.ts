import { LiveExampleWidget } from '../../../html/LiveExampleWidget';
import '../../../html/string.extensions';

export class ImageVectorizerLiveExampleWidget extends LiveExampleWidget {
   
    readonly inner: string
    core:any;

    constructor(placeholderId: string) 
    {
        var placeholder = <HTMLElement>document.getElementById(placeholderId);
        var template = require('./templates/layout.html').layout.toHTMLElement();
        super(placeholder, template);
        
        this.inner = (<HTMLElement>placeholder.querySelector('#inner')).innerHTML;
    }

    init(workerName: string, options: any): void {
        this.initJsCore(options);
        this.core.useWorker(workerName);
    }

    show(): void {
        this.enableEvents();
        this.placeholder.appendChild(this.template);
        super.show();
    }

    loadFile(path: string){
        this.core.downloadUrl(path);
    }

    enableEvents(): void{
       
    }

    private initJsCore(options: any):void{
        this.core = window['initAppSvgImageVectorizer'](this.template, options);
    }
}