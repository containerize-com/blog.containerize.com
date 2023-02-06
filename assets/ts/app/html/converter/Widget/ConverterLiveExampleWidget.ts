import { AppApiBase } from '../../api/AppApiBase';
import { HTMLAppApi } from '../../api/HTMLAppApi';
import { ConverterApi } from '../../api/ConverterApi';
import { LiveExampleWidget } from '../../LiveExampleWidget';
import '../../string.extensions';
import { TemplateDelegate } from '../../handlebars';

interface FormatItem {
    key: string,
    value: string
}

export class ConverterLiveExampleWidget extends LiveExampleWidget {
   
    api: AppApiBase;
    converterApi: ConverterApi;

    readonly input: FormatItem;
    readonly output: FormatItem[];
    readonly codeTemplate: TemplateDelegate<any>;
    readonly cardTemplate: string;
    readonly addFileSelect: HTMLElement;
    readonly urlModal: HTMLElement;
    
    data: (File | string) [] = [];

    constructor(placeholderId: string, input: string, output: string) 
    {
        super(
            <HTMLElement>document.getElementById(placeholderId), 
            require('./templates/layout.html').layout.toHTMLElement());

        this.cardTemplate = require('./templates/layout.html').card;
        this.addFileSelect = require('./templates/layout.html').addFileSelect.toHTMLElement();
        this.urlModal = require('./templates/layout.html').addUrlModal.toHTMLElement();

        this.initApi();
        this.input = this.parseFormatItem(input);
        this.output = output.split(',').map(x => this.parseFormatItem(x));
        this.data = [];
        this.codeTemplate = this.getHandlebars((<HTMLElement>this.placeholder.querySelector('template')).innerHTML);
    }

    initApi(): void{
        let api = new HTMLAppApi();;
        this.api = api;
        this.converterApi = api;
    }

    getHandlebars(code: string): TemplateDelegate<any> {
        
        var select = <HTMLSelectElement>this.template.querySelector('#outputFormat');
        let of = this.output;
        let inf = this.input;

        let handlebars = window.Handlebars.create();
        let arr = this.data;

        handlebars.registerHelper("input", function(...args) {
            var paramIndex = 0;
            var modifier = '';
            if(arr.length != 0)
            {
                var item = arr[0];
                if(item instanceof File)
                    return item.name;
                return item;
            }

            args.forEach(element => {
                if(typeof element == 'string')
                {
                    var str = element;
                    if(str.startsWith('param')){
                        paramIndex = Number.parseInt(str.substring('param'.length), 10) - 1;
                    }
                    if((str == 'camel' ||  str == 'lower' || str == 'upper') && modifier == '')
                    {
                        modifier = str;
                    }
                }    
            });

            var result = paramIndex == 0 ? inf.key : inf.value;
            if(modifier == 'camel'){
                result = result.toCamelCase();
            }else if(modifier == 'lower'){
                result = result.toLowerCase();
            }
            else if(modifier == 'upper'){
                result = result.toUpperCase();
            }
            return 'document.' + result;
        });

        handlebars.registerHelper("output", function(...args) {

            var paramIndex = 0;
            var modifier = '';
            args.forEach(element => {
                if(typeof element == 'string')
                {
                    var str = element;
                    if(str.startsWith('param')){
                        paramIndex = Number.parseInt(str.substring('param'.length), 10) - 1;
                    }
                    if((str == 'camel' ||  str == 'lower' || str == 'upper') && modifier == '')
                    {
                        modifier = str;
                    }
                }    
            });

            var items = of[select.selectedIndex];
            var result = paramIndex == 0 ? items.key : items.value;
            if(modifier == 'camel'){
                result = result.toCamelCase();
            }else if(modifier == 'lower'){
                result = result.toLowerCase();
            }
            else if(modifier == 'upper'){
                result = result.toUpperCase();
            }
            return result;
        });

        handlebars.registerHelper("if_output", function(...args) {

            let output = of[select.selectedIndex][0];
            let options = args[args.length - 1];
            
            for (let i = 0; i < args.length; i++) {
                if(output == args[i]){
                    return options.fn(this);
                }
            }

            return options.inverse(this);
        });

        return handlebars.compile(code);
    }

    show(): void {

        let addFileBtn = <HTMLInputElement>this.addFileSelect.querySelector('#addFile')!;
        var fileInput = <HTMLInputElement>addFileBtn.querySelector('#file')!;
        let addFileSelectBtn = <HTMLInputElement>this.addFileSelect.querySelector('a[data-target="file"]')!;
        let addUrlBtn = <HTMLInputElement>this.urlModal.querySelector('button[data-target="ok"]')!;
        
       
        fileInput.onchange = () => {
            let file = fileInput.files![0];
            this.addInputFile(file);
        }
        fileInput.onclick = function () {
            (<any>fileInput).value = null;
        };
        addFileSelectBtn.onclick = addFileBtn.onclick = () =>{
            fileInput.accept = '.' + this.input.key.toLowerCase();
            fileInput.click();
        }

        addUrlBtn.onclick = () =>{
            var inputUrl = <HTMLInputElement>this.urlModal.querySelector('#url')!;
            var url = inputUrl.value;
            if(!url.isNullOrWhiteSpace()){
                this.addInputUrl(url);
                (<HTMLButtonElement>this.urlModal.querySelector('button.close')).click();
            }else{
                inputUrl.focus();
            }
        }

        var outputFormatSelect = <HTMLSelectElement>this.template.querySelector('#outputFormat');
        this.output.map(x => {
            var option = document.createElement("option");
            option.value = x.key;
            option.text = x.key;
            return option;
        }).forEach(x => outputFormatSelect.appendChild(x));
        outputFormatSelect.onchange = () => this.updateCodeBlock();

        let runBtn = <HTMLElement>this.template.querySelector('#run');
        runBtn.onclick = () => this.run();
        
        var btn = this.template.querySelector('.footer #copy')!;
        btn.addEventListener('click', () => { });

        this.updateCodeBlock();
        this.placeholder.appendChild(this.template);
        this.template.querySelector('#placeholder')?.appendChild(this.addFileSelect);
        this.template.appendChild(this.urlModal);

        super.show();
    }

    addInputFile(file: File): void {
        this.moveAddFileToFooter();

        this.data.push(file);

        var card = this.cardTemplate.toHTMLElement();
        var pl = this.template.querySelector('#placeholder')!;
        var deleteBtn = <HTMLElement>card.querySelector('#delete')!;
        deleteBtn.onclick = () => {
            card.remove();
            const index = this.data.indexOf(file, 0);
            if (index > -1) {
                this.data.splice(index, 1);
            }
            if(pl.querySelectorAll('.card').length === 0){
                this.moveAddFileToMain();
                this.cancel();
            }
            this.updateCodeBlock();
        };
        (<HTMLElement>card.querySelector('#name')!).textContent = file.name;
        pl.appendChild(card);

        this.updateCodeBlock();
    }

    addInputUrl(url: string): void {
        this.moveAddFileToFooter();

        this.data.push(url);

        var card = this.cardTemplate.toHTMLElement();
        var pl = this.template.querySelector('#placeholder')!;
        var deleteBtn = <HTMLElement>card.querySelector('#delete')!;
        deleteBtn.onclick = () => {
            card.remove();
            const index = this.data.indexOf(url, 0);
            if (index > -1) {
                this.data.splice(index, 1);
            }
            if(pl.querySelectorAll('.card').length === 0){
                this.moveAddFileToMain();
                this.cancel();
            }
            this.updateCodeBlock();
        };
        (<HTMLElement>card.querySelector('#name')!).textContent = url;
        pl.appendChild(card);

        this.updateCodeBlock();
    }

    moveAddFileToFooter(){
        if(this.addFileSelect.parentElement === null)
            return;
        this.addFileSelect.remove();
        this.showElement(<HTMLElement>this.template.querySelector('#footer'));
    }

    moveAddFileToMain(){
        this.template.querySelector('#placeholder')?.appendChild(this.addFileSelect);
        this.hideElement(<HTMLElement>this.template.querySelector('#footer'));
    }

    private run(): void {
        if(this.data.length === 0)
            return;
        let file = this.data[0];

        this.showLoader();
        
        var select = <HTMLSelectElement>this.template.querySelector('#outputFormat');
        let outputFormat = select.options[select.selectedIndex].text;

        this.showLoader();
        this.converterApi
            .convert(file,  this.input.key, outputFormat)
            .then(data => {
                this.hideLoader();
                this.api.download(data.file, `file.${outputFormat}`);
            })
            .catch(error => {
                this.hideLoader();
                if (error.name !== 'AbortError') {
                    this.showError(error);
                }
            });
    }

    private cancel(): void {
        this.hideLoader();
    }

    private showLoader():void {
        let runBtn = <HTMLElement>this.template.querySelector('#run');
        let loader = runBtn.firstElementChild!;
        let btnText = runBtn.lastElementChild!;

        runBtn.classList.add('disabled');
        loader.classList.remove('hidden');
        btnText.classList.add('hidden');
    }

    private hideLoader(): void {
        let runBtn = <HTMLElement>this.template.querySelector('#run');

        let loader = runBtn.firstElementChild!;
        let btnText = runBtn.lastElementChild!;

        runBtn.classList.remove('disabled');
        loader.classList.add('hidden');
        btnText.classList.remove('hidden');
    }

    private showError(err):void {
        this.hideLoader();

        let errorBox = <HTMLElement>this.template.querySelector('#error')!;

        errorBox.innerText = err;
        errorBox.classList.remove('hidden');
        setTimeout(function () { errorBox.classList.add('hidden'); }, 3000);
    }

    private updateCodeBlock() {
        var values = {
            camel: "camel",
            lower: "lower",
            upper: "upper",
        };
        for (let i = 0; i < 2; i++) {
            values["param" + (i + 1)] = "param" + (i + 1);
        }

        let code = this.codeTemplate(values);
        let html = window.hljs.highlight(code, {language: 'csharp'}).value;
        (<HTMLElement>this.template.querySelector('#snippet')).innerHTML = html;
    }

    parseFormatItem(item:string):FormatItem{
        var p = item.split('|');
        if(p.length == 1){
            return {key: p[0], value: p[0]} as FormatItem;
        }else{
            return {key: p[0], value: p[1]} as FormatItem;
        }
    }
}