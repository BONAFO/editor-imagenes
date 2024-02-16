
const { contextBridge, ipcRenderer } = require('electron');


// Exponer ipcRenderer al contexto del navegador de forma segura
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {...ipcRenderer, on : ipcRenderer.on},
});