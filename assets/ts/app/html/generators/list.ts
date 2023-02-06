import { initGenerators } from "../global"
import { ListGeneratorLiveExample } from "./Widget/ListGeneratorLiveExample";

initGenerators();

window.html.generator.list = window.html.generator.list || function (placeholderId: string) { return new ListGeneratorLiveExample(placeholderId); }