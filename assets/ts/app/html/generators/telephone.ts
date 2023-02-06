import { initGenerators } from "../global"
import { TelephoneInputGeneratorLiveExample } from "./Widget/TelephoneInputGeneratorLiveExample";

initGenerators();

window.html.generator.telephone = window.html.generator.telephone || function (placeholderId: string) { return new TelephoneInputGeneratorLiveExample(placeholderId); }