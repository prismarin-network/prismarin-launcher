import {BrowserWindow, ipcMain} from "electron";

export default function setupWindowManager(window: BrowserWindow) {
    ipcMain.on('minimize', () => {
        window.minimize()
    })

    ipcMain.on('close', () => {
        window.close()
    })
}
