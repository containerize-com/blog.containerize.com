import { initGenerators } from "../global"
import { SubmitInputGeneratorLiveExample } from "./Widget/SubmitInputGeneratorLiveExample";

initGenerators();

window.html.generator.submit = window.html.generator.submit || function (placeholderId: string) { return new SubmitInputGeneratorLiveExample(placeholderId); }