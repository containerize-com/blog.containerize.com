export interface FileLink
{
    hRef: string
}

export const JOB_RESULT_PENDING = "pending";
export const JOB_RESULT_RUNNING = "running";
export const JOB_RESULT_COMPLETED = "completed";
export const JOB_RESULT_CANCELED = "canceled";
export const JOB_RESULT_FAULTED = "faulted";

export interface JobResult extends FileLink
{
    id: string
    status: string;
    statusMessage: string;
}

export interface JobFileResult extends JobResult
{
    file: FileLink
}

export class AppApiBase {

    readonly ApiDomain: string = 'https://api.products.aspose.app';
    readonly ProductApi: string;
    readonly FileApi: string;

    constructor(product: string) {
        this.ProductApi = `${this.ApiDomain}/${product}`;
        // this.ProductApi = 'https://localhost:5001';
        this.FileApi = `${this.ProductApi}/api/files`;
    }

    upload(files: (File | string)[]): Promise<FileLink[]> {
        let data = new FormData();
        files.forEach(f => {
            if(f instanceof File)
            {
                data.append("file", f);
            }else{
                data.append("fileUrl", f);
            }
        });

        return fetch(this.FileApi, {
                method: 'POST',
                body: data
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<FileLink[]>;
            });
    }

    download(file: FileLink, filename: string): void {
        let link = document.createElement("a");
        link.href = `${this.FileApi}?uri=${file.hRef}`;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}