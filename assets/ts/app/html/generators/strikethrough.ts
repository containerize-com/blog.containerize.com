import { initGenerators } from "../global"
import { StrikethroughGeneratorLiveExample } from "./Widget/StrikethroughGeneratorLiveExample";

initGenerators();

window.html.generator.strikethrough = window.html.generator.strikethrough || function (placeholderId: string) { return new StrikethroughGeneratorLiveExample(placeholderId); }