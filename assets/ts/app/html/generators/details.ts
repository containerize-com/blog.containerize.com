import { initGenerators } from "../global"
import { DetailsGeneratorLiveExample } from "./Widget/DetailsGeneratorLiveExample";

initGenerators();

window.html.generator.details = window.html.generator.details || function (placeholderId: string) { return new DetailsGeneratorLiveExample(placeholderId); }