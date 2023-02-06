import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class BlockquoteGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/blockquote.html').options.toHTMLElement());
    }

    enableOptionsEvents(): void{

        this.addOptionEventListener('type', ev => 
        {
            
            var select = <HTMLSelectElement>ev.target;
            let value = select.options[select.selectedIndex].value;
            var group = (<HTMLInputElement>this.options.querySelector('#for_blockquote'));

            if(value === 'blockquote')
            {
                this.showElement(group);
            }else{
                this.hideElement(group);
            }
        })
        super.enableOptionsEvents();
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let caption = this.getOption<string>('caption');
        let cite = this.getOption<string>('cite');
        
        const sb = new StringBuilder();
        if(type == 'quote'){
            sb.write(`<q`);
            
            if(!cite.isNullOrWhiteSpace()){
                sb.write(` cite='${cite}'`);
            }
            sb.writeln('>');

            if(!text.isNullOrWhiteSpace()){
                sb.writeln(text);
            }

            sb.writeln('</q>');
        }else if(type == 'blockquote'){
            sb.writeln(`<figure>`);
            
            sb.indent(1, this.indention).write(`<blockquote`);
            if(!cite.isNullOrWhiteSpace()){
                sb.write(` cite='${cite}'`);
            }
            sb.writeln('>');
            
            sb.indent(2, this.indention).write('<p>');
            if(!text.isNullOrWhiteSpace()){
                sb.write(text);
            }
            sb.writeln('</p>')

            sb.indent(1, this.indention).writeln(`</blockquote>`);

            if(!caption.isNullOrWhiteSpace()){
                sb.indent(1, this.indention).write(`<figcaption>`).write(caption).writeln(`</figcaption>`);
            }
            sb.writeln('</figure>');
        }
        
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let text = this.getOption<string>('text');
        let caption = this.getOption<string>('caption');
        let cite = this.getOption<string>('cite');

        const sb = new StringBuilder();
        
        if(type == 'quote'){
            sb.writeln('// create a quote element');
            sb.writeln('var q = (HTMLQuoteElement)document.CreateElement("q");');
            if(!cite.isNullOrWhiteSpace()){
                sb.writeln(`q.Cite = "${cite}";`);
            }
            
            
            if(!text.isNullOrWhiteSpace()){
                sb.writeln();
                sb.writeln('// create a text content');
                sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
                sb.writeln(`q.AppendChild(text);`);
            }
        }else if(type == 'blockquote'){
            sb.writeln('// create a figure element');
            sb.writeln('var figure = document.CreateElement("figure");');
            
            sb.writeln();
            sb.writeln('// create a blockquote element');
            sb.writeln('var blockquote = document.CreateElement("blockquote");');
            if(!cite.isNullOrWhiteSpace()){
                sb.writeln(`blockquote.SetAttribute("cite", "${cite}");`);
            }
            sb.writeln(`figure.AppendChild(blockquote);`);

            sb.writeln();
            sb.writeln('// create a paragraph element');
            sb.writeln('var p = document.CreateElement("p");');
            sb.writeln(`blockquote.AppendChild(p);`);
            
            if(!text.isNullOrWhiteSpace()){
                sb.writeln();
                sb.writeln('// create a text content');
                sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
                sb.writeln(`p.AppendChild(text);`);
            }

            if(!caption.isNullOrWhiteSpace()){
                sb.writeln();
                sb.writeln('// create a figcaption element');
                sb.writeln('var figcaption = document.CreateElement("figcaption");');
                sb.writeln(`figure.AppendChild(figcaption);`);
                sb.writeln();
                sb.writeln('// create a text content');
                sb.writeln(`text = document.CreateTextNode(@"${text}");`);
                sb.writeln(`figcaption.AppendChild(text);`);
            }
        }

        return sb.toString();
    }
}