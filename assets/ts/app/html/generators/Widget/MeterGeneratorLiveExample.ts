import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class MeterGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/meter.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let min = this.getOption<number>('min');
        let max = this.getOption<number>('max');
        let low = this.getOption<number>('low');
        let high = this.getOption<number>('high');
        let optimum = this.getOption<number>('optimum');
        let value = this.getOption<number>('value');
        
        const sb = new StringBuilder();
    
        sb.write(`<meter`);
        if(min){
            sb.write(` min='${min}'`);
        }
        if(max){
            sb.write(` max='${max}'`);
        }
        if(low){
            sb.write(` low='${low}'`);
        }
        if(high){
            sb.write(` high='${high}'`);
        }
        if(optimum){
            sb.write(` optimum='${optimum}'`);
        }
        if(value){
            sb.write(` value='${value}'`);
        }
        sb.write('>').write(`${value}/${max}`).writeln(`</meter>`);

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let min = this.getOption<number>('min');
        let max = this.getOption<number>('max');
        let low = this.getOption<number>('low');
        let high = this.getOption<number>('high');
        let optimum = this.getOption<number>('optimum');
        let value = this.getOption<number>('value');

        const sb = new StringBuilder();
        
        sb.writeln('// create a meter element');
        sb.writeln('var meter = document.CreateElement("meter");');
        if(min){
            sb.writeln(`meter.SetAttribute("min", "${min}");`);
        }
        if(max){
            sb.writeln(`meter.SetAttribute("max", "${max}");`);
        }
        if(low){
            sb.writeln(`meter.SetAttribute("low", "${low}");`);
        }
        if(high){
            sb.writeln(`meter.SetAttribute("high", "${high}");`);
        }
        if(optimum){
            sb.writeln(`meter.SetAttribute("optimum", "${optimum}");`);
        }
        if(value){
            sb.writeln(`meter.SetAttribute("value", "${value}");`);
        }

        return sb.toString();
    }
}