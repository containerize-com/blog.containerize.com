import { initGenerators } from "../global"
import { TextareaGeneratorLiveExample } from "./Widget/TextareaGeneratorLiveExample";

initGenerators();

window.html.generator.textarea = window.html.generator.textarea || function (placeholderId: string) { return new TextareaGeneratorLiveExample(placeholderId); }