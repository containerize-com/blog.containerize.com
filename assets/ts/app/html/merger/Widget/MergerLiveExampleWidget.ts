import { AppApiBase } from '../../api/AppApiBase';
import { HTMLAppApi } from '../../api/HTMLAppApi';
import { ConverterApi } from '../../api/ConverterApi';
import { LiveExampleWidget } from '../../LiveExampleWidget';
import '../../string.extensions';
import { MergerApi } from '../../api/MergerApi';

interface FormatItem {
    key: string,
    value: string
}

export class MergerLiveExampleWidget extends LiveExampleWidget {
   
    api: AppApiBase;
    mergerApi: MergerApi;

    readonly input: FormatItem;
    readonly output: FormatItem[];
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
    }

    initApi(): void{
        let api = new HTMLAppApi();;
        this.api = api;
        this.mergerApi = api;
        console.log(this.mergerApi);
    }

    show(): void {

        let addFileBtn = <HTMLInputElement>this.addFileSelect.querySelector('#addFile')!;
        var fileInput = <HTMLInputElement>addFileBtn.querySelector('#file')!;
        let addFileSelectBtn = <HTMLInputElement>this.addFileSelect.querySelector('a[data-target="file"]')!;
        let addUrlBtn = <HTMLInputElement>this.urlModal.querySelector('button[data-target="ok"]')!;
        
       
        fileInput.onchange = () => {
            var files = fileInput.files!;
            for (var i = 0; i < files.length; i++) {
                this.addInputFile(files[i]);
            }
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

        let runBtn = <HTMLElement>this.template.querySelector('#run');
        runBtn.onclick = () => this.run();
        
        
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
        };
        (<HTMLElement>card.querySelector('#name')!).textContent = file.name;
        pl.appendChild(card);

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
        };
        (<HTMLElement>card.querySelector('#name')!).textContent = url;
        pl.appendChild(card);
    }

    moveAddFileToFooter(){        
        var next = <HTMLElement>this.template.querySelector('#footer #next');
        next.parentElement!.insertBefore(this.addFileSelect, next.nextSibling);
        this.showElement(<HTMLElement>this.template.querySelector('#footer'));
    }

    moveAddFileToMain(){
        this.template.querySelector('#placeholder')?.appendChild(this.addFileSelect);
    }

    private run(): void {
        if(this.data.length === 0)
            return;

        this.showLoader();
        
        var select = <HTMLSelectElement>this.template.querySelector('#outputFormat');
        let outputFormat = select.options[select.selectedIndex].text;

        this.showLoader();
        console.log(this.mergerApi);
        this.mergerApi
            .merge(this.data,  this.input.key, outputFormat)
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

    parseFormatItem(item:string):FormatItem{
        var p = item.split('|');
        if(p.length == 1){
            return {key: p[0], value: p[0]} as FormatItem;
        }else{
            return {key: p[0], value: p[1]} as FormatItem;
        }
    }
}