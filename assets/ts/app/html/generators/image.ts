import { initGenerators } from "../global"
import { ImageGeneratorLiveExample } from "./Widget/ImageGeneratorLiveExample";

initGenerators();

window.html.generator.image = window.html.generator.image || function (placeholderId: string) { return new ImageGeneratorLiveExample(placeholderId); }