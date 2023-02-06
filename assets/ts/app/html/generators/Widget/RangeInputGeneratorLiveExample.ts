import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class RangeInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/range.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let value = this.getOption<number>('value');
        let minimum = this.getOption<string>('minimum');
        let maximum = this.getOption<string>('maximum');
        let step = this.getOption<string>('step');

        const sb = new StringBuilder();
        sb.write(`<input type='range'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        }
        if(value){
            sb.write(` value='${value}'`);
        }
        if(minimum){
            sb.write(` min='${minimum}'`);
        }
        if(maximum){
            sb.write(` max='${maximum}'`);
        }
        if(step){
            sb.write(` step='${step}'`);
        }
        sb.writeln('>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let value = this.getOption<number>('value');
        let minimum = this.getOption<string>('minimum');
        let maximum = this.getOption<string>('maximum');
        let step = this.getOption<string>('step');

        const sb = new StringBuilder();
        sb.writeln('// create a range element');
        sb.writeln('var range = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`range.Type = "range";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`range.Name = "${name}";`);
        }
        if(value){
            sb.writeln(`range.SetAttribute("value", "${value}");`);
        }
        if(minimum){
            sb.writeln(`range.SetAttribute("min", "${minimum}");`);
        }
        if(maximum){
            sb.writeln(`range.SetAttribute("max", "${maximum}");`);
        }
        if(step){
            sb.writeln(`range.SetAttribute("step", "${step}");`);
        }
        return sb.toString();
    }
}