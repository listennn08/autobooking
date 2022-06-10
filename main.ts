const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const isDev = process.env.IS_DEV === 'true'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      /* preload: path.join(__dirname, './preloader.js'), */
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.webContents.openDevTools()
  win.loadURL('http://localhost:3000')
  // win.loadURL(isDev
  //   ? 'http://localhost:3000'
  //   : `file://${path.join(__dirname, '/dist/index.html')}`
  // )
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function() {
    if (process.platform === 'darwin') {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    }
  })

  app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
})

ipcMain.on('test', (event, arg) => {
  console.log(arg)
})
