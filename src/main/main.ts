import { app, BrowserWindow, ipcMain } from 'electron';
import { startMonitoring } from './processService';

let mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL('http://localhost:8080/');
  mainWindow.webContents.openDevTools();

  startMonitoring((data) => {
    mainWindow.webContents.send('process-update', data);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});