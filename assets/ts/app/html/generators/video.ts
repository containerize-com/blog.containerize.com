import { initGenerators } from "../global"
import { VideoGeneratorLiveExample } from "./Widget/VideoGeneratorLiveExample";

initGenerators();

window.html.generator.video = window.html.generator.video || function (placeholderId: string) { return new VideoGeneratorLiveExample(placeholderId); }