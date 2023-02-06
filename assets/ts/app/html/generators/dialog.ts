import { initGenerators } from "../global"
import { DialogGeneratorLiveExample } from "./Widget/DialogGeneratorLiveExample";

initGenerators();

window.html.generator.dialog = window.html.generator.dialog || function (placeholderId: string) { return new DialogGeneratorLiveExample(placeholderId); }