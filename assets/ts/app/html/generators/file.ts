import { initGenerators } from "../global"
import { FileInputGeneratorLiveExample } from "./Widget/FileInputGeneratorLiveExample";

initGenerators();

window.html.generator.file = window.html.generator.file || function (placeholderId: string) { return new FileInputGeneratorLiveExample(placeholderId); }