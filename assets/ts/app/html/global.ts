import { converter } from "./converter/declaration";
import { downloader } from "./downloader/main";
import { generator } from "./generators/main";
import { merger } from "./merger/declaration";

declare global
{
    interface Window 
    {
        html : html
    }
}

type html = 
{
    addScript: () => void;
    addStyle: () => void;
    generator: generator;
    downloader: downloader;
    converter: converter;
    merger: merger;
}

function addScript(src, integrity:string = '', crossorigin:string = '', referrerpolicy:string = '')
{
    return new Promise((resolve, reject) =>
    {
        document.addEventListener('DOMContentLoaded', (event) => { 
            let script = document.createElement('script');
            script.src = src;
            if(integrity !== '')
                script.integrity = integrity;
            if(crossorigin !== '')
                script.crossOrigin = integrity;
            if(referrerpolicy !== '')
                script.referrerPolicy = referrerpolicy;
            script.async = false;
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
            document.body.appendChild(script);
        });
    });
};


function addStyle(src)
{
    return new Promise((resolve, reject) =>
    {
        document.addEventListener('DOMContentLoaded', (event) => { 
            var link = document.createElement('link');
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = src;
            link.addEventListener('load', resolve);
            link.addEventListener('error', reject);
            document.head.appendChild(link);
        });
    });
};


export function initGlobals(): void{
    window.html = window.html || ({} as html);
    window.html.addScript = window.html.addScript || addScript;
    window.html.addStyle = window.html.addStyle || addStyle;
}

export function initGenerators(): void{
    initGlobals()
    window.html.generator = window.html.generator || ({} as downloader);
}

export function initDownloaders(): void{
    initGlobals()
    window.html.downloader = window.html.downloader || ({} as downloader);
}

export function initConverters(): void{
    initGlobals()
    window.html.converter = window.html.converter || ({} as converter);
}

export function initMergers(): void{
    initGlobals()
    window.html.merger = window.html.merger || ({} as merger);
}


initGlobals();