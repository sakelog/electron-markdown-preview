import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("myAPI", {
  update: (title: string) => ipcRenderer.send("update-title", title),

  //ファイル保存
  fileOpen: () => ipcRenderer.invoke('file-open')
  .then((data) => {
    if( data.status === undefined ){
      return(false);
    }
    if( ! data.status ){
      alert(`ファイルが開けませんでした\n${data.message}`);
      return(false);
    }

    return {inputTitle: data.title, inputMarkdownBody: data.body}
  })
  .catch((err) => {
    alert(err);
  }),
  //ファイルを保存：マークダウン
  fileSaveAsMd: (data: {title:string,markdownBody:string}) => 
  ipcRenderer.invoke('file-save-md',data)
  .then((data) => {
    if( data.status === undefined ){
      return(false);
    }
    if( ! data.status ){
      alert(`ファイルが保存できませんでした\n${data.message}`);
      return(false);
    }
    
    return({outputTitle: data.title , status:true})
  })
  .catch((err) => {
    alert(err);
  }),
  //ファイルを保存：HTML
  fileSaveAsHtml: (data: {title:string,markdownBody:string}) => 
  ipcRenderer.invoke('file-save-html',data)
  .then((data) => {
    if( data.status === undefined ){
      return(false);
    }
    if( ! data.status ){
      alert(`ファイルが保存できませんでした\n${data.message}`);
      return(false);
    }
    
    return({outputTitle: data.title , status:true})
  })
  .catch((err) => {
    alert(err);
  })
});
