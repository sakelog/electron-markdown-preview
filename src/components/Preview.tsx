import React from 'react';
import { markdownToHtml } from '../lib/markdownToHtml';

import { Flex, Box, Heading } from '@chakra-ui/react';
//@ts-ignore
import style from '../styles/Object/Component/preview.module.scss';

const Preview = (props: Preview.Props) => {
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
        <Heading>{props.title}</Heading>
        <Box
          dangerouslySetInnerHTML={{ __html: markdownToHtml(props.markdown) }}
          className={style.body}
        />
      </Flex>
    </Flex>
  );
};

export default Preview;
