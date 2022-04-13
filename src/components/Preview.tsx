import React from 'react';
import { markdownToHtml } from '../lib/markdownToHtml';

import { Flex, Box, Heading } from '@chakra-ui/react';
//@ts-ignore
import style from '../styles/Object/Component/preview.module.scss';

const Preview = (props: Preview.Props) => {
  return (
    <Flex h="100%" direction="column" overflow="scroll" px={4}>
      <Box>
        <Heading>{props.title}</Heading>
      </Box>
      <Box
        dangerouslySetInnerHTML={{ __html: markdownToHtml(props.markdown) }}
        className={style.body}
        flex="1"
      />
    </Flex>
  );
};

export default Preview;
