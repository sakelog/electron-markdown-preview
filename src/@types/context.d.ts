import Preview from "../components/Preview";

export interface IElectronAPI {
  update: (title: string) => void;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
  }
  namespace Preview {
    interface Props {
      title: string;
      markdown: string;
    }
  }
  namespace MarkdownInput {
    interface Props extends Preview.Props {
      setTitle : React.Dispatch<React.SetStateAction<string>>;
      setMarkdown: React.Dispatch<React.SetStateAction<string>>;
    }
  }
}
