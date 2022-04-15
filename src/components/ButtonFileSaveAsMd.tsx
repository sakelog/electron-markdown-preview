import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setTitle } from '../redux/lib/slice';

import { Button } from '@chakra-ui/react';

const { myAPI } = window;

const ButtonFileSaveAsMd = () => {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    const { outputTitle, status } =
      await myAPI.fileSaveAsMd({
        title,
        markdownBody,
      });
    status && dispatch(setTitle(outputTitle));
  }, [markdownBody]);

  return (
    <Button onClick={onHandleSave}>
      Markdownとして保存
    </Button>
  );
};

export default ButtonFileSaveAsMd;
