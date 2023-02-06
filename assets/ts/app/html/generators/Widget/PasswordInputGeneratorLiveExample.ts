import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class PasswordInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/password.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');
        let minlength = this.getOption<number>('minlength');

        const sb = new StringBuilder();
    
        sb.write(`<input type='password'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        if(minlength){
            sb.write(` minlength='${minlength}'`);
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
        let size = this.getOption<number>('size');
        let minlength = this.getOption<number>('minlength');

        const sb = new StringBuilder();
        
        sb.writeln('// create a password element');
        sb.writeln('var password = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`password.Type = "password";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`password.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`password.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(minlength){
            sb.writeln(`password.SetAttribute("minlength", "${minlength}");`);
        }
        if(size){
            sb.writeln(`password.Size = ${size};`);
        }
        return sb.toString();
    }
}