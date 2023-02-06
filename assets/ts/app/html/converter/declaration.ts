import { ConverterLiveExampleWidget } from "./Widget/ConverterLiveExampleWidget";

export type converter = 
{
    create(placeholderId: string, input: string, output: string): ConverterLiveExampleWidget
}