import { initGenerators } from "../global"
import { CheckboxGeneratorLiveExample } from "./Widget/CheckboxGeneratorLiveExample";

initGenerators();

window.html.generator.checkbox = window.html.generator.checkbox || function (placeholderId: string) { return new CheckboxGeneratorLiveExample(placeholderId); }