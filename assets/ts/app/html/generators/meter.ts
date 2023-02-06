import { initGenerators } from "../global"
import { MeterGeneratorLiveExample } from "./Widget/MeterGeneratorLiveExample";

initGenerators();

window.html.generator.meter = window.html.generator.meter || function (placeholderId: string) { return new MeterGeneratorLiveExample(placeholderId); }