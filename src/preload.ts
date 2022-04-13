import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("myAPI", {
  update: (title: string) => ipcRenderer.send("update-title", title),
});
