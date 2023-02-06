import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class RadioButtonGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/radio.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
    
        let name = this.getOption<string>('name');
        let id = this.getOption<string>('id');
        let label = this.getOption<string>('label');
        let checked = this.getOption<boolean>('checked');

        const sb = new StringBuilder();

        sb.write(`<input type="radio"`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        
        if(!id.isNullOrWhiteSpace()){
            sb.write(` id='${id}'`);
        }
        if(checked){
            sb.write(` checked`);
        }
        sb.writeln('>');

        sb.write(`<label`);
        if(!id.isNullOrWhiteSpace()){
            sb.write(` for='${id}'`);
        }
        sb.write('>');
        sb.write(`${label}`);
        sb.writeln('</label>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let id = this.getOption<string>('id');
        let label = this.getOption<string>('label');
        let checked = this.getOption<boolean>('checked');

        const sb = new StringBuilder();
        sb.writeln('// create a radio');
        sb.writeln('var radio = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`radio.Type = "radio";`);
        if(!id.isNullOrWhiteSpace()){
            sb.writeln(`radio.Id = "${id}";`);
        }
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`radio.Name = "${name}";`);
        }
        if(checked){
            sb.writeln(`radio.Checked = true;`);
        }
        
        sb.writeln();
        sb.writeln('// create a label for radio');
        sb.writeln('var label = (HTMLLabelElement)document.CreateElement("label");');
        if(!id.isNullOrWhiteSpace()){
            sb.writeln(`label.For = "${id}";`);
        }

        if(!label.isNullOrWhiteSpace()){
            sb.writeln(`label.TextContent = "${label}";`);
        }

        return sb.toString();
    }
}


