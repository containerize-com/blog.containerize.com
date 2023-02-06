import { MergerLiveExampleWidget as HTMLMerger } from '../../../html/merger/Widget/MergerLiveExampleWidget'
import '../../../html/string.extensions';
import { SVGAppApi } from '../../api/SVGAppApi';

export class MergerLiveExampleWidget extends HTMLMerger {
   
    constructor(placeholderId: string, input: string, output: string) 
    {
        super(placeholderId, input, output);
    }

    initApi(): void{
        let api = new SVGAppApi();;
        this.api = api;
        this.mergerApi = api;
    }
}
