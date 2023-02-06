import { GeneratorsLiveExampleWidget } from './GeneratorsLiveExampleWidget';
import { StringBuilder } from '../../StringBuilder';
import '../../string.extensions';

export class TableGeneratorLiveExample extends GeneratorsLiveExampleWidget {
    
    constructor(placeholderId: string) 
    {
        super(placeholderId, require('./../templates/table.html').options.toHTMLElement());
    }

    getHtmlCodeSnippet(): string {
        
        let rows = this.getOption<string>('rows');
        let cols = this.getOption<string>('cols');
        let showHeader = this.getOption<boolean>('showHeader');
        let style = this.getOption<string>('style');
        let border = this.getOption<string>('border');
        let color = this.getOption<string>('color');
        let width = this.getOption<string>('width');
        let widthUnit = this.getOption<string>('widthUnit');
        let align = this.getOption<string>('align');

        const styleSb = new StringBuilder();
        if(style !== 'none' && Number.parseInt(border) !== 0){
            styleSb.write(`border: ${border}px ${color} ${style}`);
        }

        if(!styleSb.isEmpty()){
            styleSb.write(`; `);
        }
        styleSb.write(`width: ${width}${widthUnit}`);

        
        let indent = 1;
        const indention = ' '.repeat(4);
        const sb = new StringBuilder();
        sb.writeln(`<table style='${styleSb.toString()}' align='${align}'${Number.parseInt(border) !== 0 ? " border='" + border + "'" : ''}>`);
        if(showHeader){
            sb.indent(indent++, indention).writeln('<thead>');
            sb.indent(indent++, indention).writeln('<tr>');
            for(let j = 0; j < Number.parseInt(cols); j++){
                sb.indent(indent, indention).writeln('<th>&nbsp;</th>');
            }
            sb.indent(--indent, indention).writeln('</tr>');
            sb.indent(--indent, indention).writeln('</thead>')
        }
        sb.indent(indent++, indention).writeln('<tbody>');
        for(let i = 0; i < Number.parseInt(rows); i++){
            sb.indent(indent++, indention).writeln('<tr>');
            for(let j = 0; j < Number.parseInt(cols); j++){
                sb.indent(indent, indention).writeln('<td>&nbsp;</td>');
            }
            sb.indent(--indent, indention).writeln('</tr>');
        }
        sb.indent(--indent, indention).writeln('</tbody>')

        sb.writeln(`</table>`);
        return sb.toString();
    }

    getCSharpCodeSnippet(): string {
        let rows = this.getOption<string>('rows');
        let cols = this.getOption<string>('cols');
        let showHeader = this.getOption<boolean>('showHeader');
        let style = this.getOption<string>('style');
        let border = this.getOption<string>('border');
        let color = this.getOption<string>('color');
        let width = this.getOption<string>('width');
        let widthUnit = this.getOption<string>('widthUnit');
        let align = this.getOption<string>('align');

        const indention = ' '.repeat(4);
        const sb = new StringBuilder();
        sb.writeln('// create a table');
        sb.writeln('var table = (HTMLTableElement)document.CreateElement("table");');
        sb.writeln();
        sb.writeln('// add styles');
        if(Number.parseInt(border) !== 0)
            sb.writeln(`table.Border = "${border}";`);
        sb.writeln(`table.Align = "${align}";`)

        if(style !== 'none' && Number.parseInt(border) !== 0){
            sb.writeln(`table.Style.Border ="${border}px ${color} ${style}";`);
        }

        sb.writeln(`table.Style.Width = "${width}${widthUnit}";`);

        if (showHeader)
        {
            sb.writeln();
            sb.writeln('// add html header');
            sb.writeln('var head = (HTMLTableSectionElement)table.CreateTHead();');
            sb.writeln('var h = (HTMLTableRowElement)head.InsertRow(table.Rows.Length);');
            sb.writeln(`for (int i = 0; i < ${cols}; i++)`)
            sb.writeln('{');
            sb.indent(1, indention).writeln('var cell = (HTMLTableCellElement)h.InsertCell(h.Cells.Length);');
            sb.indent(1, indention).writeln('cell.TextContent = $"Column {i + 1}";');
            sb.writeln('}');
        }

        sb.writeln();
        sb.writeln('// add html rows & columns');
        sb.writeln(`for (int i = 0; i < ${rows}; i++)`);
        sb.writeln('{');
        sb.indent(1, indention).writeln('var row = (HTMLTableRowElement)table.InsertRow(table.Rows.Length);');
        sb.indent(1, indention).writeln(`for (int j = 0; j < ${cols}; j++)`)
        sb.indent(1, indention).writeln('{');
        sb.indent(2, indention).writeln(`var cell = (HTMLTableCellElement)row.InsertCell(row.Cells.Length);`);
        sb.indent(2, indention).writeln(`cell.TextContent = $"Row: {i + 1}, Column {j + 1}";`);
        sb.indent(1, indention).writeln('}');
        sb.writeln('}');

        return sb.toString();
    }
}


