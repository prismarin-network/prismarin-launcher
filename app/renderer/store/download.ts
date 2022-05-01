import electron from "electron";
import {makeAutoObservable} from "mobx";

const ipcRenderer = electron.ipcRenderer;

class DownloadStore {

    status: 'DOWNLOADING' | 'INSTALLING' | 'PAUSED' | 'COMPLETED' = 'COMPLETED'
    progress?: GameProgress

    constructor() {
        makeAutoObservable(this)
    }

    download(url: string) {
        ipcRenderer.send("download", {
            url,
        });
        this.status = 'DOWNLOADING'
    }

    togglePause() {
        if (this.status === 'PAUSED') {
            ipcRenderer.send("downloadResume")
            this.updateStatus("DOWNLOADING")
            return;
        }
        ipcRenderer.send("downloadPause")
        this.updateStatus("PAUSED")
    }

    cancel() {
        ipcRenderer.send("downloadCancel")
        this.updateStatus('COMPLETED')
        this.progress = undefined
    }

    updateStatus(status: 'DOWNLOADING' | 'INSTALLING' | 'PAUSED' | 'COMPLETED') {
        this.status = status
    }

    updateProgress(progress: GameProgress) {
        this.progress = progress
        if (progress.percent === 1) {
            this.status = 'COMPLETED'
        }
    }
}

const downloadStore = new DownloadStore()
export default downloadStore
