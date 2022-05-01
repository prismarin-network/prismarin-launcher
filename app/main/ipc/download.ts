import {BrowserWindow, DownloadItem, ipcMain} from "electron";
import electronDl, {download} from "electron-dl";

export default function setupDownloadManager(window: BrowserWindow) {
    let curDownloadItem: DownloadItem;

    ipcMain.on("download", (event, info: {url: string, properties: electronDl.Options}) => {
        const onStarted = (item) => curDownloadItem = item
        const onCompleted = () => curDownloadItem = undefined
        const onProgress = (status: electronDl.Progress) => {
            window.webContents.send("downloadOnProgress", status)
        }

        const properties: electronDl.Options = {
            ...info.properties,
            overwrite: true,
            onProgress,
            onStarted,
            onCompleted,
        }
        download(BrowserWindow.getFocusedWindow(), info.url, properties)
            .then(dl => window.webContents.send("downloadComplete", dl.getSavePath()));
    });

    ipcMain.on("downloadCancel", () => {
        if (curDownloadItem) {
            curDownloadItem.cancel()
        }
    })

    ipcMain.on("downloadPause", () => {
        if (curDownloadItem) {
            curDownloadItem.pause()
        }
    })

    ipcMain.on("downloadResume", () => {
        if (curDownloadItem) {
            curDownloadItem.resume()
        }
    })
}
