import { initGenerators } from "../global"
import { IFrameGeneratorLiveExample } from "./Widget/IFrameGeneratorLiveExample";

initGenerators();

window.html.generator.iframe = window.html.generator.iframe || function (placeholderId: string) { return new IFrameGeneratorLiveExample(placeholderId); }