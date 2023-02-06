import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ButtonGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/button.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        
        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let name = this.getOption<string>('name');
        let disabled = this.getOption<boolean>('disabled');

        const sb = new StringBuilder();

        sb.write(`<button`);
        sb.write(` type='${type}'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        }
        if(disabled){
            sb.write(` disabled`);
        }
        sb.writeln('>');

        if(!text.isNullOrWhiteSpace()){
            sb.indent(1).writeln(text);
        }
        sb.writeln('</button>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let name = this.getOption<string>('name');
        let disabled = this.getOption<boolean>('disabled');

        const sb = new StringBuilder();
        sb.writeln('// create a button');
        sb.writeln('var button = (HTMLButtonElement)document.CreateElement("button");');
        sb.writeln(`button.Type = "${type}";`);
        sb.writeln(`button.Name = "${name}";`);
        if(disabled){
            sb.writeln(`button.Disabled = true;`);
        }
        if(!text.isNullOrWhiteSpace()){
            sb.writeln(`button.TextContent = "${text}";`);
        }

        return sb.toString();
    }
}


