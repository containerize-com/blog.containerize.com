import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ProgressGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/progress.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let max = this.getOption<number>('max');
        let value = this.getOption<number>('value');
        
        const sb = new StringBuilder();
    
        sb.write(`<progress`);
        if(max){
            sb.write(` max='${max}'`);
        }
        if(value){
            sb.write(` value='${value}'`);
        }
        sb.write('>').write(`${parseInt((value * max / 100).toString())}%`).writeln(`</progress>`);

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let max = this.getOption<number>('max');
        let value = this.getOption<number>('value');

        const sb = new StringBuilder();
        
        sb.writeln('// create a progress element');
        sb.writeln('var progress = document.CreateElement("progress");');
        if(max){
            sb.writeln(`progress.SetAttribute("max", "${max}");`);
        }
        if(value){
            sb.writeln(`progress.SetAttribute("value", "${value}");`);
        }

        return sb.toString();
    }
}