import { initGenerators } from "../global"
import { BiDirectionalOverrideGeneratorLiveExample } from "./Widget/BiDirectionalOverrideGeneratorLiveExample";

initGenerators();

window.html.generator.bidirectionaloverride = window.html.generator.bidirectionaloverride || function (placeholderId: string) { return new BiDirectionalOverrideGeneratorLiveExample(placeholderId); }