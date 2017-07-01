const electron = require('electron')

/* init log: NOTE: it can only be inited at main process >>> */
const log = require('electron-log')
// Log level
log.transports.console.level = 'warn';
/** 
 * Set output format template. Available variables:
 * Main: {level}, {text}
 * Date: {y},{m},{d},{h},{i},{s},{ms}
 */
log.transports.console.format = '{h}:{i}:{s}:{ms} {text}';
// Same as for console transport
log.transports.file.level = 'warn';
log.transports.file.format = '{y}-{m}-{d} {h}:{i}:{s}:{ms} {text}';
// Set approximate maximum log size in bytes. When it exceeds,
// the archived log will be saved as the log.old.log file
log.transports.file.maxSize = 5 * 1024 * 1024;
/* init log on main process <<< */


const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
const chalk = require('chalk')
const installExtension = require('electron-devtools-installer').default
const {
  REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer')

const app = electron.app
const BrowserWindow = electron.BrowserWindow



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const createWindow = () => {
  log.warn("[Main]: createWindow")
  mainWindow = new BrowserWindow({width: 900, height: 680})

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

const installExtensions = async () => {
  try {
    const extensions = {
      REACT_DEVELOPER_TOOLS: REACT_DEVELOPER_TOOLS
    }

    await Object.keys(extensions).forEach(extensionName => {
      installExtension(extensions[extensionName])
      console.log(chalk.green(`Added Extension:  ${extensionName}`))
    })

    console.log(chalk.green('All extensions installed successfully!'))
    createWindow()
  } catch (err) {
    console.log(chalk.red(err))
  }
}

app.on('ready', isDev ? installExtensions : createWindow)

app.on('window-all-closed', () => {
  log.warn("[Main]: window-all-closed")
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
