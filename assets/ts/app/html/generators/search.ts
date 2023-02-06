import { initGenerators } from "../global"
import { SearchInputGeneratorLiveExample } from "./Widget/SearchInputGeneratorLiveExample";

initGenerators();

window.html.generator.search = window.html.generator.search || function (placeholderId: string) { return new SearchInputGeneratorLiveExample(placeholderId); }