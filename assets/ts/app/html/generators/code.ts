import { initGenerators } from "../global"
import { CodeGeneratorLiveExample } from "./Widget/CodeGeneratorLiveExample";

initGenerators();

window.html.generator.code = window.html.generator.code || function (placeholderId: string) { return new CodeGeneratorLiveExample(placeholderId); }