import { initGlobals } from "../global";
import { ColorLiveExampleWidget } from "./Widget/ColorLiveExampleWidget";

initGlobals();

window.svg.color.create = window.svg.color.create || function (placeholderId: string) 
{
    return new ColorLiveExampleWidget(placeholderId);
}