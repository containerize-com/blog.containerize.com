import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class TextInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/text.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
    
        sb.write(`<input type='text'`);
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
        
        sb.writeln('// create a text element');
        sb.writeln('var text = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`text.Type = "text";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`text.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`text.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(size){
            sb.writeln(`text.Size = ${size};`);
        }
        if(spellcheck){
            sb.writeln(`text.SetAttribute("spellcheck", "");`);
        }
        return sb.toString();
    }
}