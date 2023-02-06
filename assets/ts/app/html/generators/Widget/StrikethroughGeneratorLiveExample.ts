import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class StrikethroughGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/strikethrough.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
    
        sb.write(`<s>`);

        if(!text.isNullOrWhiteSpace()){
            sb.write(text);
        }
        sb.writeln('</s>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let text = this.getOption<string>('text');
        
        const sb = new StringBuilder();
        
        sb.writeln('// create an strikethrough element');
        sb.writeln('var strikethrough = document.CreateElement("s");');
        
        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`strikethrough.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}