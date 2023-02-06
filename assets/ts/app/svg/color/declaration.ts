import { ColorLiveExampleWidget } from "./Widget/ColorLiveExampleWidget";

export type color = 
{
    create(placeholderId: string): ColorLiveExampleWidget
}