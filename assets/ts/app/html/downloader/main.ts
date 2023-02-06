import { ImageDownloaderWidget } from "./Widget/ImageDownloaderWidget";

export type downloader = 
{
    image(placeholderId: string): ImageDownloaderWidget
}