import {useEffect} from "react";
import downloadStore from "../store/download";
import electron from "electron";

const DownloadListeners = () => {
    const ipcRenderer = electron.ipcRenderer || false;

    useEffect(() => {
        if (ipcRenderer) {
            ipcRenderer.on("downloadOnProgress", (event, progress: DownloadProgress) => {
                downloadStore.updateProgress(progress)
            });
            ipcRenderer.on("downloadOnCompleted", (event, savePath: string) => {
                downloadStore.onDownloadComplete(savePath)
            })
            ipcRenderer.on("compressComplete", (event, zipPath: string) => {
                downloadStore.onCompressComplete(zipPath)
            })
            ipcRenderer.on("reclaimComplete", () => {
                downloadStore.onReclaimComplete()
            })
        }
    }, [ipcRenderer])

    return <></>
}

export default DownloadListeners
