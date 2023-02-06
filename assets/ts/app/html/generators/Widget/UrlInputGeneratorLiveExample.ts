import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class UrlInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/url-input.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let pattern = this.getOption<string>('pattern');
        let size = this.getOption<number>('size');

        const sb = new StringBuilder();
    
        sb.write(`<input type='url'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        if(!pattern.isNullOrWhiteSpace()){
            sb.write(` pattern='${pattern}'`);
        } 
        if(size){
            sb.write(` size='${size}'`);
        }
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let pattern = this.getOption<string>('pattern');
        let size = this.getOption<number>('size');

        const sb = new StringBuilder();
        
        sb.writeln('// create a url element');
        sb.writeln('var url = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`url.Type = "url";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`url.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`url.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(size){
            sb.writeln(`url.Size = ${size};`);
        }
        if(!pattern.isNullOrWhiteSpace()){
            sb.writeln(`url.SetAttribute("pattern", "${pattern}");`);
        }
        return sb.toString();
    }
}