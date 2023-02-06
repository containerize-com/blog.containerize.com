import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class TelephoneInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/telephone.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');

        const sb = new StringBuilder();
    
        sb.write(`<input type='tel'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!placeholder.isNullOrWhiteSpace()){
            sb.write(` placeholder='${placeholder}'`);
        } 
        if(size){
            sb.write(` size='${size}'`);
        }
        
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let name = this.getOption<string>('name');
        let placeholder = this.getOption<string>('placeholder');
        let size = this.getOption<number>('size');

        const sb = new StringBuilder();
        
        sb.writeln('// create a telephone element');
        sb.writeln('var telephone = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`telephone.Type = "tel";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`telephone.Name = "${name}";`);
        }
        if(!placeholder.isNullOrWhiteSpace()){
            sb.writeln(`telephone.SetAttribute("placeholder", "${placeholder}");`);
        }
        if(size){
            sb.writeln(`telephone.Size = ${size};`);
        }
        return sb.toString();
    }
}