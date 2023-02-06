import { initGenerators } from "../global"
import { TextInputGeneratorLiveExample } from "./Widget/TextInputGeneratorLiveExample";

initGenerators();

window.html.generator.text = window.html.generator.text || function (placeholderId: string) { return new TextInputGeneratorLiveExample(placeholderId); }