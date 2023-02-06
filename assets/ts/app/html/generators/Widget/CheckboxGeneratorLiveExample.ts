import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class CheckboxGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/checkbox.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        
        let name = this.getOption<string>('name');
        let id = this.getOption<string>('id');
        let label = this.getOption<string>('label');
        let checked = this.getOption<boolean>('checked');

        const sb = new StringBuilder();

        sb.write(`<input type="checkbox"`);
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
        sb.writeln('// create a checkbox');
        sb.writeln('var checkbox = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`checkbox.Type = "checkbox";`);
        if(!id.isNullOrWhiteSpace()){
            sb.writeln(`checkbox.Id = "${id}";`);
        }
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`checkbox.Name = "${name}";`);
        }
        if(checked){
            sb.writeln(`checkbox.Checked = true;`);
        }
        
        sb.writeln();
        sb.writeln('// create a label for checkbox');
        sb.writeln('var label = (HTMLLabelElement)document.CreateElement("label");');
        if(!id.isNullOrWhiteSpace()){
            sb.writeln(`label.For = "${id}";`);
        }

        if(!label.isNullOrWhiteSpace()){
            sb.writeln(`label.TextContent = "${id}";`);
        }

        return sb.toString();
    }
}


