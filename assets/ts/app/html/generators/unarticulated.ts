import { initGenerators } from "../global"
import { UnderlineGeneratorLiveExample } from "./Widget/UnderlineGeneratorLiveExample";

initGenerators();

window.html.generator.unarticulated = window.html.generator.unarticulated || function (placeholderId: string) { return new UnderlineGeneratorLiveExample(placeholderId); }