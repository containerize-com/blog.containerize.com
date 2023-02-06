import { initGenerators } from "../global"
import { UrlInputGeneratorLiveExample } from "./Widget/UrlInputGeneratorLiveExample";

initGenerators();

window.html.generator.urlinput = window.html.generator.urlinput || function (placeholderId: string) { return new UrlInputGeneratorLiveExample(placeholderId); }