import { initGenerators } from "../global"
import { RadioButtonGeneratorLiveExample } from "./Widget/RadioButtonGeneratorLiveExample";

initGenerators();

window.html.generator.radio = window.html.generator.radio || function (placeholderId: string) { return new RadioButtonGeneratorLiveExample(placeholderId); }