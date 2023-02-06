import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ColorInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/color.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        
        let name = this.getOption<string>('name');
        let color = this.getOption<string>('color');

        const sb = new StringBuilder();

        sb.write(`<input type='color'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        }
        sb.write(` value='${color}'`);
        sb.writeln('>');
        
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let color = this.getOption<string>('color');

        const sb = new StringBuilder();
        sb.writeln('// create a color element');
        sb.writeln('var color = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`color.Type = "color";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`color.Name = "${name}";`);
        }
        sb.writeln(`color.SetAttribute("value", "${color}");`);

        return sb.toString();
    }
}


