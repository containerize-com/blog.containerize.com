import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class TextareaGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/textarea.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let value = this.getOption<string>('value');
        let cols = this.getOption<number>('cols');
        let rows = this.getOption<number>('rows');
        let min = this.getOption<number>('min');
        let max = this.getOption<number>('max');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
    
        sb.write(`<textarea`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        if(cols){
            sb.write(` cols='${cols}'`);
        }
        if(rows){
            sb.write(` rows='${rows}'`);
        }
        if(min){
            sb.write(` minlength='${min}'`);
        }
        if(max){
            sb.write(` maxlength='${max}'`);
        }
        if(spellcheck){
            sb.write(` spellcheck`);
        }
        
        sb.writeln('>');
        if(!value.isNullOrWhiteSpace()){
            sb.write(value);
        }
        sb.writeln('</textarea>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let value = this.getOption<string>('value');
        let cols = this.getOption<number>('cols');
        let rows = this.getOption<number>('rows');
        let min = this.getOption<number>('min');
        let max = this.getOption<number>('max');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
        
        sb.writeln('// create a textarea element');
        sb.writeln('var textarea = (HTMLTextAreaElement)document.CreateElement("textarea");');
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`textarea.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`textarea.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(cols){
            sb.writeln(`textarea.Cols = ${cols};`);
        }
        if(rows){
            sb.writeln(`textarea.Rows = ${rows};`);
        }
        if(min){
            sb.writeln(`textarea.SetAttribute("minlength", "${min}");`);
        }
        if(max){
            sb.writeln(`textarea.SetAttribute("maxlength", "${max}");`);
        }
        if(spellcheck){
            sb.writeln(`textarea.SetAttribute("spellcheck", "");`);
        }
        if(!value.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${value}");`);
            sb.writeln(`textarea.AppendChild(text);`);
        }
        return sb.toString();
    }
}