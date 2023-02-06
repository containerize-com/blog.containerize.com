import { initGlobals } from "../global";
import { Base64LiveExampleWidget } from "./Widget/Base64LiveExampleWidget";

initGlobals();

window.svg.base64.create = window.svg.base64.create || function (placeholderId: string) 
{
    return new Base64LiveExampleWidget(placeholderId);
}