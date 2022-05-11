import {app} from 'electron';
import serve from 'electron-serve';
import createWindow from "./helpers/create-window";
import setupDownloadManager from "./ipc/download";
import setupWindowManager from "./ipc/window";
import setupCompressManager from "./ipc/compress";

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
    serve({directory: 'app'});
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
    await app.whenReady();

    const mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
    });

    if (isProd) {
        await mainWindow.loadURL('app://./index.html');
    } else {
        const port = process.argv[2];
        await mainWindow.loadURL(`http://localhost:${port}/`);
    }

    setupWindowManager(mainWindow)
    setupDownloadManager(mainWindow)
    setupCompressManager(mainWindow)

    // Open dev tools on launch
    mainWindow.webContents.openDevTools()
})();

app.on('window-all-closed', () => {
    app.quit();
});
