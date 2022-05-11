import electron from "electron";
import {makeAutoObservable, runInAction} from "mobx";
import {getCorrectDownloadLinkForOs} from "../core/game";
import electronDl from "electron-dl";

const ipcRenderer = electron.ipcRenderer;

class DownloadStore {

    status: 'DOWNLOADING' | 'DECOMPRESSING' | 'RECLAIMING' | 'COMPLETE' = undefined
    isPaused = false

    downloadProgress?: DownloadProgress = undefined
    currentItem: Game = undefined

    queue: Game[] = []

    constructor() {
        makeAutoObservable(this)
    }

    // Queue
    addToQueue(game: Game) {
        if (this.queue.includes(game)) {
            return;
        }
        if (this.currentItem === game) {
            return;
        }

        this.queue.push(game)
        if (!this.currentItem) {
            this.downloadNextGame()
        }
    }

    removeFromQueue(gameId: string) {
        this.queue = this.queue.filter((game) => {
            return game.id === gameId
        })
    }

    downloadNextGame() {
        if (this.queue[0]) {
            const game = this.queue.shift()

            this.currentItem = game
            this.downloadGame(game)
        }
    }

    clearQueue() {
        this.queue = []
    }

    // Core download functions
    downloadGame(game: Game) {
        if (this.currentItem === game) {
            const downloadLink = getCorrectDownloadLinkForOs(game)
            const data: {url: string, properties: electronDl.Options} = {
                url: downloadLink,
                properties: {
                    filename: `${game.name}.zip`,
                    // directory: '', TODO: Let user choose custom download directory
                },
            }
            ipcRenderer.send("download", data);
            this.status = 'DOWNLOADING'
        }
    }

    // Core decompressing functions
    decompressFile(fileLocation: string) {
        this.status = 'DECOMPRESSING'
        ipcRenderer.send("decompress", fileLocation)
    }

    // Core reclaiming functions
    reclaimSpace(zipFileLocation: string) {
        this.status = 'RECLAIMING'
        ipcRenderer.send("reclaim", zipFileLocation)
    }

    // Status updates
    pause() {
        this.isPaused = true
        ipcRenderer.send("downloadPause")
    }

    resume() {
        this.isPaused = false
        ipcRenderer.send("downloadResume")
    }

    cancel() {
        ipcRenderer.send("downloadCancel")
        this.resetActiveDownload();
    }

    updateProgress(progress: DownloadProgress) {
        this.downloadProgress = progress
    }

    // Listeners
    onDownloadComplete(savePath) {
        this.decompressFile(savePath)
    }

    onCompressComplete(savePath) {
        this.reclaimSpace(savePath)
    }

    onReclaimComplete() {
        this.resetActiveDownload()
    }

    // Reset
    resetActiveDownload() {
        runInAction(() => {
            this.isPaused = false
            this.downloadProgress = undefined
            this.currentItem = undefined
            this.status = undefined
        })
    }
}

const downloadStore = new DownloadStore()
export default downloadStore
