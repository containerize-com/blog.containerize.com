import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class ImageGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/image.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        let source = this.getOption<string>('source');
        let alt = this.getOption<string>('alt');
        let width = this.getOption<number>('width');
        let height = this.getOption<number>('height');

        const sb = new StringBuilder();
    
        sb.write(`<img`);
        if(!source.isNullOrWhiteSpace()){
            sb.write(` src='${source}'`);
        }
        if(!alt.isNullOrWhiteSpace()){
            sb.write(` alt='${alt}'`);
        }
        if(width){
            sb.write(` width='${width}'`);
        }
        if(height){
            sb.write(` height='${height}'`);
        }
        sb.writeln('>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let source = this.getOption<string>('source');
        let alt = this.getOption<string>('alt');
        let width = this.getOption<number>('width');
        let height = this.getOption<number>('height');

        const sb = new StringBuilder();
        sb.writeln('// create an image element');
        sb.writeln('var image = (HTMLImageElement)document.CreateElement("img");');
        if(!source.isNullOrWhiteSpace()){
            sb.writeln(`image.Src = "${source}";`);
        }
        if(!alt.isNullOrWhiteSpace()){
            sb.writeln(`image.Alt = "${alt}";`);
        }
        if(width){
            sb.writeln(`image.Width = ${width};`);
        }
        if(height){
            sb.writeln(`image.Height = ${height};`);
        }

        return sb.toString();
    }
}