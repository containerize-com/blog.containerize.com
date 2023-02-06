import { initGenerators } from "../global"
import { AudioGeneratorLiveExample } from "./Widget/AudioGeneratorLiveExample";

initGenerators();

window.html.generator.audio = window.html.generator.audio || function (placeholderId: string) { return new AudioGeneratorLiveExample(placeholderId); }