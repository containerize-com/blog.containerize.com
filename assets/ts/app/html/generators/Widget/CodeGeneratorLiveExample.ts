import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class CodeGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/code.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write(`<code>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.writeln('</code>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
        
        sb.writeln('// create a code element');
        sb.writeln('var code = (HTMLElement)document.CreateElement("code");');
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`code.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}