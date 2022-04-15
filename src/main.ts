import path from 'path';
import { searchDevtools } from 'electron-search-devtools';
import {
  BrowserWindow,
  app,
  ipcMain,
  session,
  dialog,
} from 'electron';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const execPath =
    process.platform === 'win32'
      ? '../node_modules/electron/dist/electron.exe'
      : '../node_modules/.bin/electron';

  require('electron-reload')(__dirname, {
    electron: path.resolve(__dirname, execPath),
  });
}

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.setMenu(null);

  ipcMain.on('update-title', (_e, arg) => {
    mainWindow.setTitle(`MarkdownPreview: ${arg}`);
  });

  //ファイルを開く
  ipcMain.handle('file-open', async (e) => {
    const paths = dialog.showOpenDialogSync(mainWindow, {
      buttonLabel: '開く',
      filters: [{ name: 'Markdown', extensions: ['md'] }],
      properties: ['openFile'],
    });
    // キャンセルで閉じた場合
    if (paths === undefined) {
      return { status: undefined };
    }

    try {
      const filePath = paths[0];
      const buff = fs.readFileSync(filePath);

      return {
        status: true,
        path: filePath,
        title: path.basename(filePath, '.md'),
        body: buff.toString(),
      };
    } catch (error) {
      //@ts-ignore
      return { status: false, message: error.message };
    }
  });

  //ファイル保存：マークダウン
  ipcMain.handle('file-save-md', async (e, data) => {
    const filePath = dialog.showSaveDialogSync(mainWindow, {
      buttonLabel: '保存',
      defaultPath: data.title,
      filters: [{ name: 'Markdown', extensions: ['md'] }],
      properties: [],
    });
    // キャンセルで閉じた場合
    if (filePath === undefined) {
      return { status: undefined };
    }

    try {
      fs.writeFileSync(filePath, data.markdownBody);

      return {
        status: true,
        path: filePath,
        title: path.basename(filePath, '.md'),
      };
    } catch (error) {
      //@ts-ignore
      return { status: false, message: error.message };
    }
  });

  //ファイル保存：HTML
  ipcMain.handle('file-save-html', async (e, data) => {
    const filePath = dialog.showSaveDialogSync(mainWindow, {
      buttonLabel: '保存',
      defaultPath: data.title,
      filters: [{ name: 'HTML', extensions: ['html'] }],
      properties: [],
    });
    // キャンセルで閉じた場合
    if (filePath === undefined) {
      return { status: undefined };
    }

    try {
      fs.writeFileSync(filePath, data.htmlAll);

      return {
        status: true,
        path: filePath,
        title: path.basename(filePath, '.html'),
      };
    } catch (error) {
      //@ts-ignore
      return { status: false, message: error.message };
    }
  });

  if (isDev) {
    const devtools = await searchDevtools('REACT');
    devtools &&
      (await session.defaultSession.loadExtension(
        devtools,
        {
          allowFileAccess: true,
        }
      ));
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.whenReady().then(() => {
  createWindow();
});
app.once('window-all-closed', () => app.quit());
