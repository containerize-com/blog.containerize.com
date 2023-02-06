import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class HighlightGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/mark.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write(`<mark>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.writeln('</mark>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
        
        sb.writeln('// create a highlight element');
        sb.writeln('var em = (HTMLElement)document.CreateElement("mark");');
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`em.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}