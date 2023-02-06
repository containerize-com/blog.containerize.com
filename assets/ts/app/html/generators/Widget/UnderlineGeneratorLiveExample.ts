import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class UnderlineGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/unarticulated.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write(`<u>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.writeln('</u>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
        
        sb.writeln('// create unarticulated element');
        sb.writeln('var strikethrough = document.CreateElement("u");');
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`strikethrough.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}