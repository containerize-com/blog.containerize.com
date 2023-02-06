import { initGlobals } from "../global";
import { ConverterLiveExampleWidget } from "./Widget/ConverterLiveExampleWidget";

initGlobals();

window.svg.converter.create = window.svg.converter.create || function (placeholderId: string, input: string, output: string) 
{
    return new ConverterLiveExampleWidget(placeholderId, input, output);
}