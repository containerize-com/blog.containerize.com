import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class SubSubscriptGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/subsuperscript.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write('This is normal text').write(' ');
        sb.write(`<${type}>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.write(`</${type}>`);
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');

        const sb = new StringBuilder();
        
        sb.writeln('// create a superscript element');
        sb.writeln(`var superscript = (HTMLElement)document.CreateElement("${type}");`);
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`superscript.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}