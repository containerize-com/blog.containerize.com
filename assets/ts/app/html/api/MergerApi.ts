import { JobFileResult } from "./AppApiBase";

export interface MergerApi {
    merge(file: (File | string)[], input: string, output: string): Promise<JobFileResult>;
}
