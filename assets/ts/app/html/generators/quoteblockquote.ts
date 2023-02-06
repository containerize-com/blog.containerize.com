import { initGenerators } from "../global"
import { BlockquoteGeneratorLiveExample } from "./Widget/BlockquoteGeneratorLiveExample";

initGenerators();

window.html.generator.quoteblockquote = window.html.generator.quoteblockquote || function (placeholderId: string) { return new BlockquoteGeneratorLiveExample(placeholderId); }