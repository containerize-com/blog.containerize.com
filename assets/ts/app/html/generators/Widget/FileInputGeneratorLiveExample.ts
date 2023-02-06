import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class FileInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/file.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        let name = this.getOption<string>('name');
        let accept = this.getOption<string>('accept');
        let multiple = this.getOption<boolean>('multiple');

        const sb = new StringBuilder();
        sb.write(`<input type='file'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!accept.isNullOrWhiteSpace()){
            sb.write(` accept='${accept}'`);
        } 
        if(multiple){
            sb.write(` multiple`);
        }
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {
        let name = this.getOption<string>('name');
        let accept = this.getOption<string>('accept');
        let multiple = this.getOption<boolean>('multiple');

        const sb = new StringBuilder();
        sb.writeln('// create a file element');
        sb.writeln('var file = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`file.Type = "file";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`file.Name = "${name}";`);
        } 
        if(!accept.isNullOrWhiteSpace()){
            sb.writeln(`file.Accept = "${accept}";`);
        } 
        if(multiple){
            sb.writeln(`file.SetAttribute("multiple", "");`);
        }
        return sb.toString();
    }
}