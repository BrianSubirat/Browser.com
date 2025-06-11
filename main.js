const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true // Keeps it safe
    }
  });

  // You can change this to any website!
  win.loadURL('https://www.google.com');
}

app.whenReady().then(createWindow);
