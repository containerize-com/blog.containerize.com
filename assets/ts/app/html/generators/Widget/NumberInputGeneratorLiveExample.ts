import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class NumberInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/number.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let value = this.getOption<number>('value');
        let minimum = this.getOption<string>('minimum');
        let maximum = this.getOption<string>('maximum');
        let step = this.getOption<string>('step');

        const sb = new StringBuilder();
        sb.write(`<input type='number'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
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
        let placeholder = this.getOption<string>('placeholder');
        let value = this.getOption<number>('value');
        let minimum = this.getOption<string>('minimum');
        let maximum = this.getOption<string>('maximum');
        let step = this.getOption<string>('step');

        const sb = new StringBuilder();
        sb.writeln('// create a number element');
        sb.writeln('var number = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`number.Type = "number";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`number.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`number.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(value){
            sb.writeln(`number.SetAttribute("value", "${value}");`);
        }
        if(minimum){
            sb.writeln(`number.SetAttribute("min", "${minimum}");`);
        }
        if(maximum){
            sb.writeln(`number.SetAttribute("max", "${maximum}");`);
        }
        if(step){
            sb.writeln(`number.SetAttribute("step", "${step}");`);
        }
        return sb.toString();
    }
}