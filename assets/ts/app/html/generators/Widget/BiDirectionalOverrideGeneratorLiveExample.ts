import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class BiDirectionalOverrideGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/bi-directional-override.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let spellcheck = this.getOption<boolean>('spellcheck');
        
        const sb = new StringBuilder();
    
        sb.write(`<bdo dir='${type}'`);
        if(spellcheck){
            sb.write(` spellcheck`);
        }
        sb.writeln('>');

        if(!text.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).writeln(text);
        }
        sb.writeln('</bdo>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let spellcheck = this.getOption<boolean>('spellcheck');

        const sb = new StringBuilder();
        
        sb.writeln('// create a bi-directional override element');
        sb.writeln('var bdo = (HTMLElement)document.CreateElement("bdo");');
        sb.writeln(`bdo.SetAttribute("dir", "${type}");`);
        if(spellcheck){
            sb.writeln(`bdo.SetAttribute("spellcheck", "");`);
        }

        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`bdo.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}