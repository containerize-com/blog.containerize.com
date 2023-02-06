import { initGlobals } from "../global";
import { MergerLiveExampleWidget } from "./Widget/MergerLiveExampleWidget";

initGlobals();

window.svg.converter.create = window.svg.converter.create || function (placeholderId: string, input: string, output: string) 
{
    return new MergerLiveExampleWidget(placeholderId, input, output);
}