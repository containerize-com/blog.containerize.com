import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ImageInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/image-input.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let url = this.getOption<string>('url');
        let name = this.getOption<string>('name');
        let alt = this.getOption<string>('alt');
        let height = this.getOption<number>('height');
        let width = this.getOption<number>('width');
        let autofocus = this.getOption<boolean>('autofocus');

        const sb = new StringBuilder();
        sb.write(`<input type='image'`);
        if(!url.isNullOrWhiteSpace()){
            sb.write(` src='${url}'`);
        } 
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 
        if(!alt.isNullOrWhiteSpace()){
            sb.write(` alt='${alt}'`);
        }
        if(height){
            sb.write(` height='${height}'`);
        }
        if(width){
            sb.write(` width='${width}'`);
        }
        if(autofocus){
            sb.write(` autofocus`);
        }
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let url = this.getOption<string>('url');
        let name = this.getOption<string>('name');
        let alt = this.getOption<string>('alt');
        let height = this.getOption<number>('height');
        let width = this.getOption<number>('width');
        let autofocus = this.getOption<boolean>('autofocus');

        const sb = new StringBuilder();
        sb.writeln('// create an image element');
        sb.writeln('var image = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`image.Type = "image";`);
        if(!url.isNullOrWhiteSpace()){
            sb.writeln(`image.Src = "${url}";`);
        }
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`image.Name = "${name}";`);
        }
        if(!alt.isNullOrWhiteSpace()){
            sb.writeln(`image.Alt = "${alt}";`);
        }
        if(height){
            sb.writeln(`image.SetAttribute("height", "${height}");`);
        }
        if(width){
            sb.writeln(`image.SetAttribute("width", "${width}");`);
        }
        if(autofocus){
            sb.writeln(`image.SetAttribute("autofocus", "");`);
        }
        return sb.toString();
    }
}