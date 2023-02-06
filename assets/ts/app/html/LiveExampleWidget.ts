import { hljs  } from './hljs';

export class LiveExampleWidget {
    
    readonly placeholder: HTMLElement
    readonly template: HTMLElement

    protected readonly indention: string = ' '.repeat(4);

    constructor(
        placeholder: HTMLElement,
        template: HTMLElement)
    {
        this.placeholder = placeholder;
        this.template = template;
    }

    show(): void {
        console.log(`Initialize ${(<Object>this).constructor.name}`);
    }

    showElement(element: HTMLElement){
        element.classList.remove('hidden');
    }

    hideElement(element: HTMLElement){
        element.classList.add('hidden');
    }

    createDownloadPanelButton():HTMLElement{
        return require('./templates/buttons.html').download.toHTMLElement();
    }

    createClipboardPanelButton():HTMLElement{
        var element = require('./templates/buttons.html').clipboard.toHTMLElement();
        // var oldText = element.innerHTML;
        // var newText = 'Text Copied!';
        // element.addEventListener('click', () =>{
        //     element.innerHTML = newText;
        //     setTimeout(() =>{
        //         element.innerHTML = oldText;
        //     }, 500);
        // })
        return element;
    }

    download(url:string, filename: string):void 
    {
        let link = window.document.createElement("a");
        link.href = url;
        link.download = filename;
        this.placeholder.appendChild(link);
        link.click();
        link.remove();
    }

    downloadContent(filename: string, content: string): void{
        var link = window.document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([content], {type: 'text/csv'}));
        link.download = filename;
        this.placeholder.appendChild(link);
        link.click();
        link.remove();
    }

    waitFor(fn, time = 1000, wait = 10000): Promise<any>
    {
        const startTime = new Date().getTime();            
        try {
          if (fn()) {
            return Promise.resolve(true);
          } else {
            return new Promise((resolve, reject) => {
              const timer = setInterval(() => {
                try {
                  if (fn()) {
                    clearInterval(timer);
                    resolve(true);
                  } else if (new Date().getTime() - startTime > wait) {
                    clearInterval(timer);                  
                    reject(new Error('Max wait reached'));
                  }
                } catch (e) {
                  clearInterval(timer);
                  reject(e);
                }
              }, time);
            });
          }
        } catch (e) {
          return Promise.reject(e);
        }
    };

    fetchViaProxy(url) : Promise<Response>
    {
        return fetch("https://localhost:5001/proxy",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({url: url })
        });
    }
}
