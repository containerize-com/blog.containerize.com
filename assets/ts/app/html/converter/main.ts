import { initConverters } from "../global";
import { ConverterLiveExampleWidget } from "./Widget/ConverterLiveExampleWidget";

initConverters();

window.html.converter.create = window.html.converter.create || function (placeholderId: string, input: string, output: string) 
{
    return new ConverterLiveExampleWidget(placeholderId, input, output);
}