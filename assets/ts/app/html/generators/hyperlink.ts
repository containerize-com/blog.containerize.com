import { initGenerators } from "../global"
import { HyperlinkGeneratorLiveExample } from "./Widget/HyperlinkGeneratorLiveExample";

initGenerators();

window.html.generator.hyperlink = window.html.generator.hyperlink || function (placeholderId: string) { return new HyperlinkGeneratorLiveExample(placeholderId); }