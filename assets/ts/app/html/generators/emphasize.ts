import { initGenerators } from "../global"
import { EmphasizeGeneratorLiveExample } from "./Widget/EmphasizeGeneratorLiveExample";

initGenerators();

window.html.generator.emphasize = window.html.generator.emphasize || function (placeholderId: string) { return new EmphasizeGeneratorLiveExample(placeholderId); }