export interface IElectronAPI {
  update: (title: string) => void;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
  }
}
