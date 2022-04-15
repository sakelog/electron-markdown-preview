import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Flex, Box } from '@chakra-ui/react';
import ButtonFileSaveAsHtml from './ButtonFileSaveAsHtml';

const Preview = () => {
  const htmlBody = useSelector<RootState>(
    (state) => state.mainState.htmlBody
  ) as string;

  return (
    <Flex h="100%" direction="column">
      <Box pb={2}>プレビュー</Box>
      <Flex
        direction="column"
        flex="1"
        px={4}
        py={2}
        overflowY="scroll"
        border="2px"
        borderColor="gray.200"
        rounded="md"
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: htmlBody,
          }}
          sx={{
            h1: {
              fontWeight: 'bold',
              fontSize: '4xl',
              borderBottom: '3px solid',
              marginBottom: '4',
              padding: '2',
            },
            h2: {
              fontSize: '4xl',
              backgroundColor: 'gray.100',
              marginY: '4',
              padding: '2',
            },
            h3: {
              fontWeight: 'bold',
              fontSize: '2xl',
              border: '2px solid',
              borderColor: 'gray.400',
              marginY: '4',
              padding: '2',
            },
            h4: {
              fontSize: '2xl',
              marginY: '4',
              padding: '2',
            },
            h5: {
              fontWeight: 'bold',
              fontSize: 'xl',
              marginY: '4',
              padding: '2',
            },
            h6: {
              fontSize: 'xl',
              marginY: '4',
              padding: '2',
            },
            blockQuote: {
              borderLeft: '3px solid',
              borderColor: 'gray.400',
              fontStyle: 'italic',
              paddingLeft: '2',
            },
            a: {
              color: 'blue.400',
              textDecoration: 'underline',
            },
            img: {
              margin: '4',
            },
            pre: {
              marginTop: '2',
              marginBottom: '2',
            },
            ul: {
              listStylePosition: 'inside',
            },
            ol: {
              listStylePosition: 'inside',
            },
            hr: {
              backgroundColor: 'gray.400',
              marginY: '2',
            },
          }}
        />
      </Flex>
      <Box py={4}>
        <ButtonFileSaveAsHtml />
      </Box>
    </Flex>
  );
};

export default Preview;
