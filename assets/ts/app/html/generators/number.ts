import { initGenerators } from "../global"
import { NumberInputGeneratorLiveExample } from "./Widget/NumberInputGeneratorLiveExample";

initGenerators();

window.html.generator.number = window.html.generator.number || function (placeholderId: string) { return new NumberInputGeneratorLiveExample(placeholderId); }