import { LiveExampleWidget } from '../../../html/LiveExampleWidget';
import '../../../html/string.extensions';

export class ColorLiveExampleWidget extends LiveExampleWidget {
   
    readonly inner: string
    core:any;
    input: string;
    output:string;

    constructor(placeholderId: string) 
    {
        super(
            <HTMLElement>document.getElementById(placeholderId), 
            require('./templates/layout.html').layout.toHTMLElement());

        this.inner = (<HTMLElement>this.placeholder.querySelector('#inner')).innerHTML;
    }

    init(input: string, output:string): void {
        this.input = input;
        this.output = output;
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
        this.core.downloadUrl(path);
    }

    enableEvents(): void{
       
    }

    private initJsCore():void{
        this.core = window['appSvgColorPicker'](this.template.querySelector('#colorPicker'));

        (<HTMLElement>this.template.querySelector('.header')).innerText = `Convert ${this.input} to ${this.output} - C#`;

        this.core.bindInputFieldContainer(this.template.querySelector('#input'), this.input);
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_1'), 'HEX');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_2'), 'RGB');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_3'), 'NCOL');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_4'), 'CMYK');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_5'), 'HSL');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_6'), 'HWB');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_7'), 'LAB');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_8'), 'OKLAB');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_11'), 'LCH');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_12'), 'OKLCH');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_9'), 'HSV');
        this.core.bindOutputFieldContainer(this.template.querySelector('#output_10'), 'XYZ');
    }
}