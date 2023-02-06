import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class SubmitInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/submit.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let value = this.getOption<string>('value');
        let disabled = this.getOption<boolean>('disabled');

        const sb = new StringBuilder();
    
        sb.write(`<input type='submit'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!value.isNullOrWhiteSpace()){
            sb.write(` value='${value}'`);
        } 
        if(disabled){
            sb.write(` disabled`);
        }
        
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let value = this.getOption<string>('value');
        let disabled = this.getOption<boolean>('disabled');

        const sb = new StringBuilder();
        
        sb.writeln('// create a submit element');
        sb.writeln('var submit = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`submit.Type = "submit";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`submit.Name = "${name}";`);
        }
        if(!value.isNullOrWhiteSpace()){
            sb.writeln(`submit.SetAttribute("value", "${value}");`);
        }
        if(disabled){
            sb.writeln(`submit.Disabled = true;`);
        }
        return sb.toString();
    }
}