import { initGenerators } from "../global"
import { RangeInputGeneratorLiveExample } from "./Widget/RangeInputGeneratorLiveExample";

initGenerators();

window.html.generator.range = window.html.generator.range || function (placeholderId: string) { return new RangeInputGeneratorLiveExample(placeholderId); }