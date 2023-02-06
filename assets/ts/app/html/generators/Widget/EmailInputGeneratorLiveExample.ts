import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class EmailInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/email.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let multiple = this.getOption<boolean>('multiple');
        let required = this.getOption<boolean>('required');
        let pattern = this.getOption<string>('pattern');
        

        const sb = new StringBuilder();

        sb.write(`<input type='email'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        sb.write(` size='${size}'`);
        if(multiple){
            sb.write(` multiple`);
        }
        if(required){
            sb.write(` required`);
        }
        if(!pattern.isNullOrWhiteSpace()){
            sb.write(` pattern='${pattern}'`);
        } 
        
        sb.writeln('>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let multiple = this.getOption<boolean>('multiple');
        let required = this.getOption<boolean>('required');
        let pattern = this.getOption<string>('pattern');

        const sb = new StringBuilder();
        sb.writeln('// create an email element');
        sb.writeln('var email = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`email.Type = "email";`);
        sb.writeln(`email.Name = "${name}";`);
        sb.writeln(`email.Size = ${size};`);
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`email.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(multiple){
            sb.writeln(`email.SetAttribute("multiple", "");`);
        }
        if(required){
            sb.writeln(`email.SetAttribute("required", "");`);
        }
        if(!pattern.isNullOrWhiteSpace()){
            sb.writeln(`email.SetAttribute("pattern", "${pattern}");`);
        }
        
        return sb.toString();
    }
}