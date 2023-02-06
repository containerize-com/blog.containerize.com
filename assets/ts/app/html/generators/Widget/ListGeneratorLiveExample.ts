import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ListGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/list.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        var lines = text.split("\n");

        var listTag = "";
        if(type === 'ordered'){
            listTag = `ol`;
        }
        if(type === 'unordered'){
            listTag = `ul`;
        }

        const sb = new StringBuilder();
        sb.writeln(`<${listTag}>`);
        
        lines.forEach(x =>{
            sb.indent(1, this.indention).writeln(`<li>${x}</li>`);
        })

        sb.write(`</${listTag}>`);

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        var lines = text.split("\n");

        var listTag = "";
        if(type === 'ordered'){
            listTag = `ol`;
        }
        if(type === 'unordered'){
            listTag = `ul`;
        }
        
        const sb = new StringBuilder();
        
        sb.writeln('// create a list element');
        sb.writeln(`var list = document.CreateElement("${listTag}");`);
        
        for (let i = 0; i < lines.length; i++) {
            sb.writeln();
            sb.writeln('// create a list-item element');
            sb.writeln(`var item${i + 1} = document.CreateElement("li");`);
            sb.writeln(`item${i + 1}.TextContent = @"${lines[i]}";`);
            sb.writeln(`list.AppendChild(item${i + 1});`);
        }

        if(!text.isNullOrWhiteSpace()){
           
        }
        
        return sb.toString();
    }
}