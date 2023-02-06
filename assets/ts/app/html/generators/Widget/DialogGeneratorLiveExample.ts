import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class DialogGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/dialog.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        let open = this.getOption<boolean>('open');
        
        const sb = new StringBuilder();
    
        sb.write(`<dialog`);
        if(open){
            sb.write(` open`);
        }
        sb.writeln('>');

        if(!text.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).writeln(text);
        }
        sb.writeln(`</dialog>`);

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');
        let open = this.getOption<boolean>('open');

        const sb = new StringBuilder();
        
        sb.writeln('// create a dialog element');
        sb.writeln('var dialog = document.CreateElement("dialog");');
        if(open){
            sb.writeln(`dialog.SetAttribute("open", "");`);
        }

        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`dialog.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}