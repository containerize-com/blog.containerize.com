import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class DetailsGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/details.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let summary = this.getOption<string>('summary');
        let text = this.getOption<string>('text');
        let open = this.getOption<boolean>('open');
        
        const sb = new StringBuilder();
    
        sb.write(`<details`);
        if(open){
            sb.write(` open`);
        }
        sb.writeln('>');
        if(!summary.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).write(`<summary>`).write(summary).writeln(`</summary>`);
        }

        if(!text.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).writeln(text);
        }
        sb.writeln(`</details>`);

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let summary = this.getOption<string>('summary');
        let text = this.getOption<string>('text');
        let open = this.getOption<boolean>('open');

        const sb = new StringBuilder();
        
        sb.writeln('// create a details element');
        sb.writeln('var details = document.CreateElement("details");');
        if(open){
            sb.writeln(`details.SetAttribute("open", "");`);
        }

        if(!summary.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a summary content');
            sb.writeln('var summary = document.CreateElement("summary");');
            sb.writeln(`summary.TextContent = "${summary}";`);
            sb.writeln(`details.AppendChild(summary);`);
        }

        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`details.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}