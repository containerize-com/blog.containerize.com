import { ImageVectorizerLiveExampleWidget } from "./Widget/ImageVectorizerLiveExampleWidget";

export type imagevectorizer = 
{
    create(placeholderId: string, input: string, output: string): ImageVectorizerLiveExampleWidget
}