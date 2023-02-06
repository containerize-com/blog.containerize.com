import { initGenerators } from "../global"
import { ProgressGeneratorLiveExample } from "./Widget/ProgressGeneratorLiveExample";

initGenerators();

window.html.generator.progress = window.html.generator.progress || function (placeholderId: string) { return new ProgressGeneratorLiveExample(placeholderId); }