import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setHtmlAll, setMarkdownBody, setTitle } from '../redux/lib/slice';

import ButtonBase from './ButtonBase';

const { myAPI } = window;

const FileOpenButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onHandleInput = useCallback(async () => {
    const { inputTitle, inputMarkdownBody } = await myAPI.fileOpen();
    if (inputTitle && inputMarkdownBody) {
      dispatch(setTitle(inputTitle));
      dispatch(setMarkdownBody(inputMarkdownBody));
      dispatch(setHtmlAll());
    }
  }, []);
  return <ButtonBase clickFunction={onHandleInput}>ファイルを開く</ButtonBase>;
};

export default FileOpenButton;
