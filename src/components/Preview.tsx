import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Flex, Box } from '@chakra-ui/react';
//@ts-ignore
import style from '../styles/Object/Component/preview.module.scss';

const Preview = () => {
  const htmlAll = useSelector<RootState>(
    (state) => state.mainState.htmlAll
  ) as string;

  return (
    <Flex h="100%" direction="column">
      <Box pb={2}>プレビュー</Box>
      <Flex
        direction="column"
        flex="1"
        px={4}
        py={2}
        overflow="scroll"
        border="2px"
        borderColor="gray.200"
        rounded="md"
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: htmlAll,
          }}
          className={style.body}
        />
      </Flex>
    </Flex>
  );
};

export default Preview;
