import { base64 } from "./base64/declaration";
import { color } from "./color/declaration";
import { converter } from "./converter/declaration";
import { imagevectorizer } from "./imagevectorizer/declaration";
import { merger } from "./merger/declaration";

declare global
{
    interface Window 
    {
        svg : svg
    }
}

type svg = 
{
    addScript: () => void;
    addStyle: () => void;
    converter: converter;
    vectorizer: imagevectorizer;
    base64: base64;
    color: color;
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
    window.svg = window.svg || ({} as svg);
    window.svg.converter = window.svg.converter || ({} as converter);
    window.svg.vectorizer = window.svg.vectorizer || ({} as imagevectorizer);
    window.svg.base64 = window.svg.base64 || ({} as base64);
    window.svg.color = window.svg.color || ({} as color);
    window.svg.merger = window.svg.merger || ({} as merger);

    window.svg.addScript = window.svg.addScript || addScript;
    window.svg.addStyle = window.svg.addStyle || addStyle;
}

initGlobals();