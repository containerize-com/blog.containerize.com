import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class HyperlinkGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/hyperlink.html').options.toHTMLElement());
    }

    enableOptionsEvents(): void{

        var for_mailto = (<HTMLInputElement>this.options.querySelector('#for_mailto'));
        var for_tel = (<HTMLInputElement>this.options.querySelector('#for_tel'));
        var for_url = (<HTMLInputElement>this.options.querySelector('#for_url'));
        
        this.addOptionEventListener('type', ev => 
        {
            var select = <HTMLSelectElement>ev.target;
            let value = select.options[select.selectedIndex].value;

            if(value === 'mailto')
            {
                this.showElement(for_mailto);
                this.hideElement(for_tel);
                this.hideElement(for_url);
            }else if(value === 'tel')
            {
                this.hideElement(for_mailto);
                this.showElement(for_tel);
                this.hideElement(for_url);
            }else if(value === 'url')
            {
                this.hideElement(for_mailto);
                this.hideElement(for_tel);
                this.showElement(for_url);
            }
        })
        super.enableOptionsEvents();
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        
        const sb = new StringBuilder();
        
        let text: string = "";
        sb.write(`<a`);

        if(type === 'mailto')
        {
            let email_address = this.getOption<string>('email_address');
            text = this.getOption<string>('email_text');
            
            if(!email_address.isNullOrWhiteSpace()){
                sb.write(` href='mailto:${email_address}'`);
            }
        }else if(type === 'tel'){
            let tel_address = this.getOption<string>('tel_address');
            text = this.getOption<string>('tel_text');

            if(!tel_address.isNullOrWhiteSpace()){
                sb.write(` href='tel:${tel_address}'`);
            }
        }else if(type === 'url'){
            let url_target = this.getOption<string>('url_target');
            let url_address = this.getOption<string>('url_address');
            let download = this.getOption<boolean>('download');
            let nofollow = this.getOption<boolean>('nofollow');
            let noreferrer = this.getOption<boolean>('noreferrer');
            let external = this.getOption<boolean>('external');
            let help = this.getOption<boolean>('help');
            text = this.getOption<string>('url_text');

            if(!url_address.isNullOrWhiteSpace()){
                sb.write(` href='${url_address}'`);
            }

            if(!url_target.isNullOrWhiteSpace() && url_target !== '_self'){
                sb.write(` target='${url_target}'`);
            }

            if(download){
                sb.write(` download`);
            }

            let rel = new Array();
            if(nofollow){
                rel.push('nofollow');
            }
            if(noreferrer){
                rel.push('noreferrer');
            }
            if(external){
                rel.push('external');
            }
            if(help){
                rel.push('help');
            }

            if(rel.length > 0){
                sb.write(` rel='${rel.join(' ')}'`);
            }

        }

        sb.write('>').write(text).writeln(`</a>`);
        
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        
        const sb = new StringBuilder();
        
        let text: string = "";
        sb.writeln('// create an anchor element');
        sb.writeln('var anchor = (HTMLAnchorElement)document.CreateElement("a");');

        if(type === 'mailto')
        {
            let email_address = this.getOption<string>('email_address');
            text = this.getOption<string>('email_text');
            
            if(!email_address.isNullOrWhiteSpace()){
                sb.writeln(`anchor.Href = "mailto:${email_address}";`);
            }
        }else if(type === 'tel'){
            let tel_address = this.getOption<string>('tel_address');
            text = this.getOption<string>('tel_text');

            if(!tel_address.isNullOrWhiteSpace()){
                sb.writeln(`anchor.Href = "tel:${tel_address}";`);
            }
        }else if(type === 'url'){
            let url_target = this.getOption<string>('url_target');
            let url_address = this.getOption<string>('url_address');
            let download = this.getOption<boolean>('download');
            let nofollow = this.getOption<boolean>('nofollow');
            let noreferrer = this.getOption<boolean>('noreferrer');
            let external = this.getOption<boolean>('external');
            let help = this.getOption<boolean>('help');
            text = this.getOption<string>('url_text');

            if(!url_address.isNullOrWhiteSpace()){
                sb.writeln(`anchor.Href = "${url_address}";`);
            }

            if(!url_target.isNullOrWhiteSpace() && url_target !== '_self'){
                sb.writeln(`anchor.Target = "${url_target}";`);
            }

            let rel = new Array();
            if(nofollow){
                rel.push('nofollow');
            }
            if(noreferrer){
                rel.push('noreferrer');
            }
            if(external){
                rel.push('external');
            }
            if(help){
                rel.push('help');
            }

            if(rel.length > 0){
                sb.writeln(`anchor.Rel = "${rel.join(' ')}";`);
            }

            if(download){
                sb.writeln(`anchor.SetAttribute("download", "");`);
            }
        }

        if(!text.isNullOrWhiteSpace()){
            sb.writeln();
            sb.writeln('// create a text content');
            sb.writeln(`var text = document.CreateTextNode(@"${text}");`);
            sb.writeln(`anchor.AppendChild(text);`);
        }
        
        return sb.toString();
    }
}