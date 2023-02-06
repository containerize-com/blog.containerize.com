import { initGenerators } from "../global"
import { ButtonGeneratorLiveExample } from "./Widget/ButtonGeneratorLiveExample";

initGenerators();

window.html.generator.button = window.html.generator.button || function (placeholderId: string) { return new ButtonGeneratorLiveExample(placeholderId); }