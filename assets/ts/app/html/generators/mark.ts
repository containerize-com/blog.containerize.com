import { initGenerators } from "../global"
import { HighlightGeneratorLiveExample } from "./Widget/HighlightGeneratorLiveExample";

initGenerators();

window.html.generator.mark = window.html.generator.mark || function (placeholderId: string) { return new HighlightGeneratorLiveExample(placeholderId); }