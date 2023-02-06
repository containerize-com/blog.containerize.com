import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class VideoGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/video.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        
        const indention = ' '.repeat(4);

        let source = this.getOption<string>('source');
        let width = this.getOption<number>('width');
        let height = this.getOption<number>('height');
        let preload = this.getOption<string>('preload');
        let autoplay = this.getOption<boolean>('autoplay');
        let controls = this.getOption<boolean>('controls');
        let loop = this.getOption<boolean>('loop');
        let muted = this.getOption<boolean>('muted');

        const sb = new StringBuilder();
    
        sb.write(`<video`);
        if(autoplay){
            sb.write(` autoplay`);
        }
        if(controls){
            sb.write(` controls`);
        }
        if(loop){
            sb.write(` loop`);
        }
        if(muted){
            sb.write(` muted`);
        }
        if(!preload.isNullOrWhiteSpace() && preload != 'auto'){
            sb.write(` preload='${preload}'`);
        }
        if(width){
            sb.write(` width='${width}'`);
        }
        if(height){
            sb.write(` height='${height}'`);
        }
        sb.writeln('>');
        if(!source.isNullOrWhiteSpace()){
            sb.indent(1, indention).writeln(`<source src="${source}" type="video/mp4">`);
        }
        sb.writeln('</video>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let source = this.getOption<string>('source');
        let width = this.getOption<number>('width');
        let height = this.getOption<number>('height');
        let preload = this.getOption<string>('preload');
        let autoplay = this.getOption<boolean>('autoplay');
        let controls = this.getOption<boolean>('controls');
        let loop = this.getOption<boolean>('loop');
        let muted = this.getOption<boolean>('muted');
        const sb = new StringBuilder();
        
        sb.writeln('// create a video element');
        sb.writeln('var video = (HTMLElement)document.CreateElement("video");');
        if(autoplay){
            sb.writeln(`video.SetAttribute("autoplay", "");`);
        }
        if(controls){
            sb.writeln(`video.SetAttribute("controls", "");`);
        }
        if(loop){
            sb.writeln(`video.SetAttribute("loop", "");`);
        }
        if(muted){
            sb.writeln(`video.SetAttribute("muted", "");`);
        }
        if(!preload.isNullOrWhiteSpace() && preload != 'auto'){
            sb.writeln(`video.SetAttribute("preload", "${preload}");`);
        }
        if(width){
            sb.writeln(`image.Width = ${width};`);
        }
        if(height){
            sb.writeln(`image.Height = ${height};`);
        }
        
        if(!source.isNullOrWhiteSpace()){
            sb.writeln('');
            sb.writeln('// create an MP4 source');
            sb.writeln('var source = (HTMLElement)document.CreateElement("source");');
            sb.writeln(`source.SetAttribute("src", "${source}");`);
            sb.writeln(`source.SetAttribute("type", "video/mp4");`);
            sb.writeln(`video.AppendChild(source);`);
        }

        return sb.toString();
    }
}