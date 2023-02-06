import {  initMergers } from "../global";
import { MergerLiveExampleWidget } from "./Widget/MergerLiveExampleWidget";

initMergers();

window.html.merger.create = window.html.merger.create || function (placeholderId: string, input: string, output: string) 
{
    return new MergerLiveExampleWidget(placeholderId, input, output);
}