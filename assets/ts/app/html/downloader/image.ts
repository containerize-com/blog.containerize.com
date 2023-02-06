import { initDownloaders } from "../global";
import { ImageDownloaderWidget } from "./Widget/ImageDownloaderWidget";

initDownloaders();

window.html.downloader.image = window.html.downloader.image || function (placeholderId: string) { return new ImageDownloaderWidget(placeholderId)}