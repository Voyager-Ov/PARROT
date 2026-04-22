const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('parrot', {
  getVersion: () => ipcRenderer.invoke('parrot:version')
});
