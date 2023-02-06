import { AppApiBase, JobFileResult, FileLink, JOB_RESULT_PENDING, JOB_RESULT_RUNNING, JOB_RESULT_COMPLETED } from "./AppApiBase";
import { ConverterApi } from "./ConverterApi";
import { MergerApi } from "./MergerApi";


export class HTMLAppApi extends AppApiBase implements ConverterApi, MergerApi {

    private readonly conversionUrl: string;

    constructor() {
        super('html');
        this.conversionUrl = `${this.ProductApi}/api/conversion`;
    }

    convert(file: (File | string), input: string, output: string): Promise<JobFileResult> {
        const delay = t => new Promise(resolve => setTimeout(resolve, t));
        const convertion = function (url: string, files: FileLink[]): Promise<JobFileResult> {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'Files': files,
                        'InputFormat': input,
                        'OutputFormat': output,
                        'BackgroundColor': '#FFFFFF'
                    })
                }).then(response => {
                    if (!response.ok)
                        throw new Error(response.statusText);
                    return response.json() as Promise<JobFileResult>;
                });
        };
        const watch = function (url: string): Promise<JobFileResult> {
            return fetch(url).then(response => {
                    if (!response.ok)
                        throw new Error(response.statusText);
                    return response.json() as Promise<JobFileResult>;
                })
                .then(data => {
                    console.log(data);
                    switch (data.status) {
                        case JOB_RESULT_PENDING:
                        case JOB_RESULT_RUNNING:
                            return delay(700).then(() => watch(url));
                        case JOB_RESULT_COMPLETED:
                            return data;
                    }
                    throw new Error(data.statusMessage);
                });

        };

        return this
            .upload([ file ])
            .then(files => {
                return convertion(this.conversionUrl, files);
            })
            .then(data => {
                return watch(`${this.conversionUrl}?id=${data.id}`);
            });
    }

    merge(files: (File | string)[], input: string, output: string): Promise<JobFileResult> {
        const delay = t => new Promise(resolve => setTimeout(resolve, t));
        const convertion = function (url: string, files: FileLink[]): Promise<JobFileResult> {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'Files': files,
                        'InputFormat': input,
                        'OutputFormat': output,
                        'BackgroundColor': '#FFFFFF',
                        'Merge': true
                    })
                }).then(response => {
                    if (!response.ok)
                        throw new Error(response.statusText);
                    return response.json() as Promise<JobFileResult>;
                });
        };
        const watch = function (url: string): Promise<JobFileResult> {
            return fetch(url).then(response => {
                    if (!response.ok)
                        throw new Error(response.statusText);
                    return response.json() as Promise<JobFileResult>;
                })
                .then(data => {
                    console.log(data);
                    switch (data.status) {
                        case JOB_RESULT_PENDING:
                        case JOB_RESULT_RUNNING:
                            return delay(700).then(() => watch(url));
                        case JOB_RESULT_COMPLETED:
                            return data;
                    }
                    throw new Error(data.statusMessage);
                });

        };

        return this
            .upload(files)
            .then(files => {
                return convertion(this.conversionUrl, files);
            })
            .then(data => {
                return watch(`${this.conversionUrl}?id=${data.id}`);
            });
    }
}
