import { initGenerators } from "../global"
import { EmailInputGeneratorLiveExample } from "./Widget/EmailInputGeneratorLiveExample";

initGenerators();

window.html.generator.email = window.html.generator.email || function (placeholderId: string) { return new EmailInputGeneratorLiveExample(placeholderId); }