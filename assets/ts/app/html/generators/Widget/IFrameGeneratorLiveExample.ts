import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class IFrameGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/iframe.html').options.toHTMLElement());
    }

    enableOptionsEvents(): void{

        this.addOptionEventListener('borders', ev => 
        {
            var group = (<HTMLInputElement>this.options.querySelector('#border-group'));
            if((<HTMLInputElement>ev.target).checked)
            {
                this.showElement(group);
            }else{
                this.hideElement(group);
            }
        })
        super.enableOptionsEvents();
    }

    getHtmlCodeSnippet(): string {
        
        let url = this.getOption<string>('url');
        let name = this.getOption<string>('name');
        let width =  this.getOption<string>('width');
        let widthUnit = this.getOption<string>('widthUnit');
        let height = this.getOption<string>('height');
        let heightUnit = this.getOption<string>('heightUnit');
        let scrollbar = this.getOption<boolean>('scrollbar');
        let borders = this.getOption<boolean>('borders');
        let borderWidth = this.getOption<string>('borderWidth');
        let borderStyle = this.getOption<string>('borderStyle');
        let borderColor = this.getOption<string>('borderColor');

        const sb = new StringBuilder();
        sb.write(`<iframe`);
        sb.write(` src='${url}'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        }
        sb.write(` width='${width}${widthUnit}'`);
        sb.write(` height='${height}${heightUnit}'`);

        if(scrollbar){
            sb.write(` scrolling='yes'`);
        }

        if(borders){
            sb.write(` style='border:${borderWidth}px ${borderStyle} ${borderColor}'`);
        }

        sb.write(`></iframe>`);
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {
        let url = this.getOption<string>('url');
        let name = this.getOption<string>('name');
        let width =  this.getOption<string>('width');
        let widthUnit = this.getOption<string>('widthUnit');
        let height = this.getOption<string>('height');
        let heightUnit = this.getOption<string>('heightUnit');
        let scrollbar = this.getOption<boolean>('scrollbar');
        let borders = this.getOption<boolean>('borders');
        let borderWidth = this.getOption<string>('borderWidth');
        let borderStyle = this.getOption<string>('borderStyle');
        let borderColor = this.getOption<string>('borderColor');
        
        const sb = new StringBuilder();

        sb.writeln('// create an element');
        sb.writeln('var iframe = (HTMLIFrameElement)document.CreateElement("iframe");');
        sb.writeln();
        sb.writeln('// update properties');
        sb.writeln(`iframe.Src = "${url}";`);
        if(!name.isNullOrWhiteSpace()){
            sb.writeln(`iframe.Name = "${name}";`);
        }

        sb.writeln(`iframe.Width = "${width}${widthUnit}";`);
        sb.writeln(`iframe.Height = "${height}${heightUnit}";`);

        if(scrollbar){
            sb.writeln(`iframe.Scrolling = "yes";`);
        }
        if(borders){
            sb.writeln(`iframe.Style.Border = "${borderWidth}px ${borderStyle} ${borderColor}";`);
        }
        return sb.toString();
    }
}


