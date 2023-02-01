const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')

function createWindow(){
  const windowState = windowStateKeeper()
 
  const win = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: 320,
    height: 460,
    resizable: false,
    alwaysOnTop: true
  })

  win.loadFile('index.html')
  win.removeMenu(true)
  windowState.manage(win)
} 

app.on('ready', function(){
  createWindow()
})