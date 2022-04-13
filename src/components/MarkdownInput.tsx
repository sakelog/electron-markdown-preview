import React from 'react';

import { Flex, Box, Heading, Input, Textarea } from '@chakra-ui/react';

const MarkdownInput = (props: MarkdownInput.Props) => {
  return (
    <Flex direction="column" h="100%">
      <Box py={4}>
        <Heading>題名</Heading>
        <Input
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          variant="filled"
          type="text"
        />
      </Box>
      <Box flex="1 1 0%" display="flex" flexDirection={'column'}>
        <Heading>本文</Heading>
        <Textarea
          value={props.markdown}
          onChange={(e) => props.setMarkdown(e.target.value)}
          variant="filled"
          resize="none"
          overflow="scroll"
          flex="1"
        />
      </Box>
    </Flex>
  );
};

export default MarkdownInput;
