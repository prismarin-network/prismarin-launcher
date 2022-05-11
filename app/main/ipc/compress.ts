import {BrowserWindow, ipcMain} from "electron";
import DecompressZip from "decompress-zip"
import * as fs from "fs";

function deleteFile(filePath: string): Promise<void> {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, () => {
            return;
        });
    }
    return;
}

export default function setupCompressManager(window: BrowserWindow) {
    ipcMain.on("reclaim", async (event, filePath: string) => {
        await deleteFile(filePath)
        window.webContents.send("reclaimComplete")
    })

    ipcMain.on("decompress", (event, filePath: string) => {
        const unzipper = new DecompressZip(filePath);
        const DESTINATION_PATH = filePath.replace('.zip', '');

        // Add the error event listener
        unzipper.on('error', function (error) {
            window.webContents.send("compressOnError", error)
        });

        // Notify when everything is extracted
        unzipper.on('extract', function () {
            window.webContents.send("compressComplete", filePath)
        });

        // Start extraction of the content
        unzipper.extract({
            path: DESTINATION_PATH
        });
    });
}
