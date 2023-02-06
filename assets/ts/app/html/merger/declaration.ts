import { MergerLiveExampleWidget } from "./Widget/MergerLiveExampleWidget";

export type merger = 
{
    create(placeholderId: string, input: string, output: string): MergerLiveExampleWidget
}