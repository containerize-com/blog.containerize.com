import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class DateTimeInputGeneratorLiveExample extends GeneratorsLiveExampleWidget {
   
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/datetime.html').options.toHTMLElement());
    }

    enableOptionsEvents(): void {
        this.addOptionEventListener('type', ev => 
        {
            var value = this.getOption<string>('type');
            this.updateDate(value);
        })
        super.enableOptionsEvents();
    }

    getHtmlCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let name = this.getOption<string>('name');
        let value = this.getOption<string>('value');

        const sb = new StringBuilder();

        sb.write(`<input type='${type}'`);
        if(!name.isNullOrWhiteSpace()){
            sb.write(` name='${name}'`);
        } 

        if(!value.isNullOrWhiteSpace()){
            sb.write(` value='${value}'`);
        } 
        
        sb.writeln('>');

        return sb.toString();
    }

    getCSharpCodeSnippet(): string {

        let type = this.getOption<string>('type');
        let name = this.getOption<string>('name');
        let value = this.getOption<string>('value');

        const sb = new StringBuilder();

        sb.writeln(`// create a ${type} element`);
        sb.writeln('var input = (HTMLInputElement)document.CreateElement("input");');
        sb.writeln(`input.Type = "${type}";`);
        sb.writeln(`input.Name = "${name}";`);
        if(!value.isNullOrWhiteSpace()){
            sb.writeln(`input.SetAttribute("value", "${value}");`);
        } 
        

        return sb.toString();
    }

    show(): void {
        super.show();
        this.updateDate('date');
    }

    updateDate(type: string){
        var d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        let h = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(d);
        let m = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d);

        var dateStr;
        switch(type){
            case 'date':
                dateStr = `${ye}-${mo}-${da}`;
                break
            case 'datetime-local':
                dateStr = `${ye}-${mo}-${da}T${h}:${m}`;
                break;
            case 'month':
                dateStr = `${ye}-${mo}`;
                break;
            case 'time':
                dateStr = `${h}:${m}`;
                break;
            case 'week':
                dateStr = `${ye}-W${this.getWeekNumber(d)}`;
                break;
        }
        (<HTMLInputElement>this.options.querySelector('#value')).value = dateStr;
    }

    getWeekNumber(dt:Date) {
        var tdt = new Date(dt.valueOf());
        var dayn = (dt.getDay() + 6) % 7;
        tdt.setDate(tdt.getDate() - dayn + 3);
        var firstThursday = tdt.valueOf();
        tdt.setMonth(0, 1);
        if (tdt.getDay() !== 4) 
            tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        
        return 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000);
    }
}