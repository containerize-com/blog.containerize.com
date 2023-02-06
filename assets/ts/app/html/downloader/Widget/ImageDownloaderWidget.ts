import '../../string.extensions';
import { LiveExampleWidget } from '../../LiveExampleWidget';

export class ImageDownloaderWidget extends LiveExampleWidget {
   
    readonly cardTemplate : string;
    readonly description: string

    constructor(placeholderId: string) 
    {
        var placeholder = <HTMLElement>document.getElementById(placeholderId)
        var template = require('./templates/layout.image.html').layout.toHTMLElement();
        super(placeholder, template);

        this.cardTemplate = require('./templates/layout.image.html').card;
        this.description = (<HTMLElement>this.placeholder.querySelector('template')).innerHTML;
    }

    enableEvents(): void{
        var search = <HTMLElement>this.template.querySelector('#search');
        search.addEventListener('click', () => { this.search(); });

        var url = (<HTMLInputElement>this.template.querySelector('#url'));
        url.addEventListener('input', () => { 
            if(!url.value.isNullOrWhiteSpace()){
                search.classList.remove('disabled');
            }else{
                search.classList.add('disabled');
            }
        });
    }

    search(){
        
        var input = <HTMLInputElement>this.placeholder.querySelector(`#url`);
        var url = input.value;
       
        if(input.checkValidity()) {
            this.loadSite(url);
        }
    }

    show(): void {

        var el = <HTMLElement>this.template.querySelector('#description');
        if(this.description.trim().length !== 0){  
            el.innerHTML = this.description;
        }else{
            el.style.visibility = "hidden";
        }

        el = <HTMLElement>this.template.querySelector('#code');
        var code = el.textContent!;
        code = window.hljs.highlight(code, {language: 'csharp'}).value;
        el.innerHTML = code;


        this.enableEvents();
        this.placeholder.appendChild(this.template);
        super.show();
    }

    onLoadingStart(){
        var loaded = <HTMLElement>this.placeholder.querySelector(`#results #loader`);
        var results = <HTMLElement>this.placeholder.querySelector(`#results`);

        this.message('');
        this.showElement(loaded);
        this.hideElement(results);

        var images = results.querySelector('#images')!
        while(images.firstChild != null)
            images.removeChild(images.firstChild);
    }

    onLoadingEnd(){
        var loaded = <HTMLElement>this.placeholder.querySelector(`#results #loader`);
        var results = <HTMLElement>this.placeholder.querySelector(`#results`);

        this.hideElement(loaded);
        this.showElement(results);
    }

    loadSite(url: string){
        this.onLoadingStart();
        
        this.fetchViaProxy(url)
        .then(function(res){
            if(res.ok){
                return res.blob();
            }
            throw new Error(res.statusText);
        })
        .then( blob => blob.text())
        .then( text => {
            var doc = document.implementation.createHTMLDocument();
            doc.documentElement.innerHTML = text;
            
            const base = doc.createElement('base');
            base.href = url;
            doc.head.append( base );

            this.populateImages(doc);
        })
        .catch(er => this.error(er))
        .finally
        {
            this.onLoadingEnd();
        }
    }

    populateImages(doc: Document){
        var images = doc.querySelectorAll('img');
        var container = <HTMLElement>this.placeholder.querySelector(`#results #images`);
        this.message(`Found ${images.length} images`);
        images.forEach(x => {
            var card = this.cardTemplate.toHTMLElement();
            var url = x.src;
            card.querySelector('#text')!.textContent = url;
            (<HTMLImageElement>card.querySelector('#img')!).src =  url;

            var download = <HTMLAnchorElement>card.querySelector('#download')!;
            download.href = url;
            download.rel="nofollow";
            download.download = "";
            download.target = "_blank"
            // download.addEventListener('click', () => {
            //     this.fetchViaProxy(url)
            //     .then(function(res){
            //         console.log(res);
            //         if(res.ok) return res.blob();
            //         throw new Error(res.statusText);
            //     })
            //     .then( blob => {
            //         console.log(blob);
            //         var tmpUrl = window.URL.createObjectURL(blob);
            //         var tmpEl = window.document.createElement('a');
            //         tmpEl.href = x.src; 
            //         var fileName = tmpEl.pathname.substring(url.lastIndexOf('/')+1);;
            //         tmpEl.href = tmpUrl;
            //         tmpEl.download = fileName
            //         this.placeholder.appendChild(tmpEl);
            //         tmpEl.click();
            //         tmpEl.remove();
            //         window.URL.revokeObjectURL(tmpUrl);
            //     })
            //     .catch(er => this.error(er))
            // });

            container.appendChild(card);
        })
    }

    error(message: string){
        var element = <HTMLElement>this.placeholder.querySelector(`#results #message`);
        element.innerText = message;
    }
    message(smg: string){
        var element = <HTMLElement>this.placeholder.querySelector(`#results #message`);
        element.innerText = smg;
    }
}
