const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myAPI", {
    // Example API to read a file
    readFile: (filePath) => ipcRenderer.invoke("read-file", filePath),
});
