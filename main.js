"use strict";
exports.__esModule = true;
var electron_1 = require("electron"); // ES import 
var window;
electron_1.app.on("ready", function () {
    window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile("index.html");
});
