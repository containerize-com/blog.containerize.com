import { initGenerators } from "../global"
import { PasswordInputGeneratorLiveExample } from "./Widget/PasswordInputGeneratorLiveExample";

initGenerators();

window.html.generator.password = window.html.generator.password || function (placeholderId: string) { return new PasswordInputGeneratorLiveExample(placeholderId); }