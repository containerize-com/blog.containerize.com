import { initGenerators } from "../global"
import { CitationGeneratorLiveExample } from "./Widget/CitationGeneratorLiveExample";

initGenerators();

window.html.generator.cite = window.html.generator.cite || function (placeholderId: string) { return new CitationGeneratorLiveExample(placeholderId); }