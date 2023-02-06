import { initGenerators } from "../global"
import { TableGeneratorLiveExample } from "./Widget/TableGeneratorLiveExample";

initGenerators();

window.html.generator.table = window.html.generator.table || function (placeholderId: string) { return new TableGeneratorLiveExample(placeholderId); }