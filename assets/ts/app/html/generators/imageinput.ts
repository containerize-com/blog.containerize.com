import { initGenerators } from "../global"
import { ImageInputGeneratorLiveExample } from "./Widget/ImageInputGeneratorLiveExample";

initGenerators();

window.html.generator.imageinput = window.html.generator.imageinput || function (placeholderId: string) { return new ImageInputGeneratorLiveExample(placeholderId); }