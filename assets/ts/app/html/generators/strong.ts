import { initGenerators } from "../global"
import { StrongGeneratorLiveExample } from "./Widget/StrongGeneratorLiveExample";

initGenerators();

window.html.generator.strong = window.html.generator.strong || function (placeholderId: string) { return new StrongGeneratorLiveExample(placeholderId); }