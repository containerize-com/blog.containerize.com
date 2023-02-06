import { initGenerators } from "../global"
import { DateTimeInputGeneratorLiveExample } from "./Widget/DateTimeInputGeneratorLiveExample";

initGenerators();

window.html.generator.datetime = window.html.generator.datetime || function (placeholderId: string) { return new DateTimeInputGeneratorLiveExample(placeholderId); }