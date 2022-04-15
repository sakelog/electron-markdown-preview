import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setHtmlBody, setMarkdownBody, setTitle } from '../redux/lib/slice';

import { Button } from '@chakra-ui/react';

const { myAPI } = window;

const ButtonFileOpen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onHandleInput = useCallback(async () => {
    const { inputTitle, inputMarkdownBody } = await myAPI.fileOpen();
    if (inputTitle && inputMarkdownBody) {
      dispatch(setTitle(inputTitle));
      dispatch(setMarkdownBody(inputMarkdownBody));
      dispatch(setHtmlBody());
    }
  }, []);
  return <Button onClick={onHandleInput}>ファイルを開く</Button>;
};

export default ButtonFileOpen;
