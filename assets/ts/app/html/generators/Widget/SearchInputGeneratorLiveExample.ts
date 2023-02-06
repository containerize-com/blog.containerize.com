import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class SearchInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/search.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
    
        sb.write(`<input type='search'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        if(size){
            sb.write(` size='${size}'`);
        }
        if(spellcheck){
            sb.write(` spellcheck`);
        }
        
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
        
        sb.writeln('// create a search element');
        sb.writeln('var search = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`search.Type = "search";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`search.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`search.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(size){
            sb.writeln(`search.Size = ${size};`);
        }
        if(spellcheck){
            sb.writeln(`search.SetAttribute("spellcheck", "");`);
        }
        return sb.toString();
    }
}