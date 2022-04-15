export interface IElectronAPI {
  update: (title: string) => void;
  fileOpen: () => Promise<{
    inputTitle: string;
    inputMarkdownBody: string;
  }>;
  fileSaveAsMd: (data: {
    title: string;
    markdownBody: string;
  }) => Promise<{
    outputTitle: string;
    status: boolean;
  }>;
  fileSaveAsHtml: (data: {
    title: string;
    htmlAll: string;
  }) => Promise<{
    outputTitle: string;
    status: boolean;
  }>;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
  }
}
