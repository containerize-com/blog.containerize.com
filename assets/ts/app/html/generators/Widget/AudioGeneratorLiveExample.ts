import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class AudioGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/audio.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {

        let source_ogg = this.getOption<string>('source_ogg');
        let source_mpeg = this.getOption<string>('source_mpeg');
        let preload = this.getOption<string>('preload');
        let autoplay = this.getOption<boolean>('autoplay');
        let controls = this.getOption<boolean>('controls');
        let loop = this.getOption<boolean>('loop');
        let muted = this.getOption<boolean>('muted');

        const sb = new StringBuilder();
    
        sb.write(`<audio`);
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
        sb.writeln('>');
        if(!source_ogg.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).writeln(`<source src="${source_ogg}" type="audio/ogg">`);
        }
        if(!source_mpeg.isNullOrWhiteSpace()){
            sb.indent(1, this.indention).writeln(`<source src="${source_mpeg}" type="audio/mp3">`);
        }
        sb.writeln('</audio>');
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let source_ogg = this.getOption<string>('source_ogg');
        let source_mpeg = this.getOption<string>('source_mpeg');
        let preload = this.getOption<string>('preload');
        let autoplay = this.getOption<boolean>('autoplay');
        let controls = this.getOption<boolean>('controls');
        let loop = this.getOption<boolean>('loop');
        let muted = this.getOption<boolean>('muted');

        const sb = new StringBuilder();
        
        sb.writeln('// create an audio element');
        sb.writeln('var audio = (HTMLElement)document.CreateElement("audio");');
        if(autoplay){
            sb.writeln(`audio.SetAttribute("autoplay", "");`);
        }
        if(controls){
            sb.writeln(`audio.SetAttribute("controls", "");`);
        }
        if(loop){
            sb.writeln(`audio.SetAttribute("loop", "");`);
        }
        if(muted){
            sb.writeln(`audio.SetAttribute("muted", "");`);
        }
        if(!preload.isNullOrWhiteSpace() && preload != 'auto'){
            sb.writeln(`audio.SetAttribute("preload", "${preload}");`);
        }
        
        if(!source_ogg.isNullOrWhiteSpace()){
            sb.writeln('');
            sb.writeln('// create an OGG format');
            sb.writeln('var oggSource = (HTMLElement)document.CreateElement("source");');
            sb.writeln(`oggSource.SetAttribute("src", "${source_ogg}");`);
            sb.writeln(`oggSource.SetAttribute("type", "audio/ogg");`);
            sb.writeln(`audio.AppendChild(oggSource);`);
        }

        if(!source_mpeg.isNullOrWhiteSpace()){
            sb.writeln('');
            sb.writeln('// create an MP3 format');
            sb.writeln('var mp3Source = (HTMLElement)document.CreateElement("source");');
            sb.writeln(`mp3Source.SetAttribute("src", "${source_mpeg}");`);
            sb.writeln(`mp3Source.SetAttribute("type", "audio/mp3");`);
            sb.writeln(`audio.AppendChild(mp3Source);`);
        }
        
        return sb.toString();
    }
}