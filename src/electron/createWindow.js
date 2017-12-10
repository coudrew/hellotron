import { BrowserWindow } from 'electron';
const path = require('path');
const url = require('url');

export const createWindow = () => {
  let win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  win.webContents.openDevTools();
  win.on('closed', () => {

    win = null;
  });

  return win;
};