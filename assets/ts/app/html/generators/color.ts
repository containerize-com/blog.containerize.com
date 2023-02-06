import { initGenerators } from "../global"
import { ColorInputGeneratorLiveExample } from "./Widget/ColorInputGeneratorLiveExample";

initGenerators();

window.html.generator.color = window.html.generator.color || function (placeholderId: string) { return new ColorInputGeneratorLiveExample(placeholderId); }