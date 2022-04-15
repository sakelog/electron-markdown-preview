import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setTitle, setHtmlAll } from '../redux/lib/slice';

import ButtonBase from './ButtonBase';

const { myAPI } = window;

const FileOpenButton = () => {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const htmlAll = useSelector<RootState>(
    (state) => state.mainState.htmlAll
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    dispatch(setHtmlAll());
    const { outputTitle, status } = await myAPI.fileSaveAsHtml({
      title,
      htmlAll,
    });
    status && dispatch(setTitle(outputTitle));
  }, [htmlAll]);

  return <ButtonBase clickFunction={onHandleSave}>HTMLとして保存</ButtonBase>;
};

export default FileOpenButton;
