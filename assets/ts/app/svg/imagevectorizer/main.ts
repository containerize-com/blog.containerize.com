import { initGlobals } from "../global";
import { ImageVectorizerLiveExampleWidget } from "./Widget/ImageVectorizerLiveExampleWidget";

initGlobals();

window.svg.vectorizer.create = window.svg.vectorizer.create || function (placeholderId: string) 
{
    return new ImageVectorizerLiveExampleWidget(placeholderId);
}