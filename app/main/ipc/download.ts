import {BrowserWindow, DownloadItem, ipcMain} from "electron";
import electronDl, {download} from "electron-dl";

export default function setupDownloadManager(window: BrowserWindow) {
    let curDownloadItem: DownloadItem;

    ipcMain.on("download", (event, data: {url: string, properties?: electronDl.Options}) => {
        const onStarted = (item) => curDownloadItem = item
        const onCompleted = () => {
            window.webContents.send("downloadOnCompleted", curDownloadItem.getSavePath())
            curDownloadItem = undefined
        }
        const onProgress = (status: electronDl.Progress) => {
            window.webContents.send("downloadOnProgress", status)
        }

        const properties: electronDl.Options = {
            overwrite: true,
            onProgress,
            onStarted,
            onCompleted,
            ...data.properties,
        }
        download(BrowserWindow.getFocusedWindow(), data.url, properties)
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
