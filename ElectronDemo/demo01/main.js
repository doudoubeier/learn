var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: { nodeIntegration: true }
    })

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })

})