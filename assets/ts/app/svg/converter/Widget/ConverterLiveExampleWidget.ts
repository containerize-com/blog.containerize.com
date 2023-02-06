import { ConverterLiveExampleWidget as HTMLConverter } from '../../../html/converter/Widget/ConverterLiveExampleWidget'
import '../../../html/string.extensions';
import { SVGAppApi } from '../../api/SVGAppApi';

export class ConverterLiveExampleWidget extends HTMLConverter {
   
    constructor(placeholderId: string, input: string, output: string) 
    {
        super(placeholderId, input, output);
    }

    initApi(): void{
        let api = new SVGAppApi();;
        this.api = api;
        this.converterApi = api;
    }
}
