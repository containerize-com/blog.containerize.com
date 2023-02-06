import { initGenerators } from "../global"
import { SubSubscriptGeneratorLiveExample } from "./Widget/SubSubscriptGeneratorLiveExample";

initGenerators();

window.html.generator.superscriptsubscript = window.html.generator.superscriptsubscript || function (placeholderId: string) { return new SubSubscriptGeneratorLiveExample(placeholderId); }