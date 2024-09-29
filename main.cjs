// main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Optional: to expose APIs
            contextIsolation: true, // Recommended for security
            enableRemoteModule: false, // Disable the remote module for security
            nodeIntegration: false, // Disable Node.js integration in the renderer process
        },
    });

    // Load your React app based on the environment
    if (process.env.NODE_ENV === "production") {
        mainWindow.loadFile(path.join(__dirname, "dist", "index.html")); // Load production build
    } else {
        mainWindow.loadURL("http://localhost:5173"); // For development
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
