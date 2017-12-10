import {createWindow} from "./createWindow";

const { app } = require('electron');


let mainWindow;

const initMainWindow = () => {
  mainWindow = createWindow();
};

app.on('ready', initMainWindow);

app.on('activate', () => {
  mainWindow === null && initMainWindow();
});

