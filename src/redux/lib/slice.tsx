import { createSlice } from '@reduxjs/toolkit';
import {
  markdownToHtml,
  markdownToHtmlDocument,
} from '../../lib/markdownToHtml';

type reducerState = {
  title: string;
  markdownBody: string;
  markdownAll: string;
  htmlBody: string;
  htmlAll: string;
};

const initialState: reducerState = {
  title: 'title',
  markdownBody: '## test',
  markdownAll: '',
  htmlBody: '',
  htmlAll: '',
};

export const markdownSlice = createSlice({
  name: 'markdownSlice',
  initialState: initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setMarkdownBody: (state, action) => {
      state.markdownBody = action.payload;
    },
    setHtmlBody: (state) => {
      state.htmlBody = markdownToHtml(
        '# ' + state.title + '\n\n' + state.markdownBody
      );
    },
    setHtmlAll: (state) => {
      state.htmlAll = markdownToHtmlDocument({
        title: state.title,
        markdown: '# ' + state.title + '\n\n' + state.markdownBody,
      });
    },
  },
});

export const { setTitle, setMarkdownBody, setHtmlBody, setHtmlAll } =
  markdownSlice.actions;

export default markdownSlice.reducer;
