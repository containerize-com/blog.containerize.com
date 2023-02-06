import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class StrongGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/strong.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write(`<strong>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.writeln('</strong>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');

        const sb = new StringBuilder();
        
        sb.writeln('// create a strong importance element');
        sb.writeln('var strong = (HTMLElement)document.CreateElement("strong");');
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`strong.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}