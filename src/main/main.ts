import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { monitorProcess, monitorAnotherProcess } from './processService';

let mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL('http://localhost:8080/');
  mainWindow.webContents.openDevTools();

  ipcMain.on('get-process-data', (event) => {
    const data = monitorProcess();
    event.sender.send('process-data-response', data);
  });

  ipcMain.on('get-another-process-data', (event) => {
    const data = monitorAnotherProcess();
    event.sender.send('another-process-data-response', data);
  });

  setInterval(() => {
    const data = monitorProcess();
    mainWindow.webContents.send('process-update', data);

    const anotherData = monitorAnotherProcess();
    mainWindow.webContents.send('another-process-update', anotherData);
  }, 3000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
