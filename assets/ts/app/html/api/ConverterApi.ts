import { JobFileResult } from "./AppApiBase";

export interface ConverterApi {
    convert(file: (File | string), input: string, output: string): Promise<JobFileResult>;
}
