import React from 'react';

import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { markdownToHtml } from '../lib/markdownToHtml';

const MarkdownInput = (props: MarkdownInput.Props) => {
  return (
    <Flex direction="column" h="100%">
      <FormControl pb={4}>
        <FormLabel htmlFor="markdownTitle">題名</FormLabel>
        <Input
          id="markdownTitle"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
          variant="filled"
          type="text"
        />
        <FormHelperText>文章の題名を入力</FormHelperText>
      </FormControl>
      <FormControl flex="1" display="flex" flexDir="column">
        <FormLabel htmlFor="markdownBody">本文</FormLabel>
        <Textarea
          id="markdownBody"
          value={props.markdown}
          onChange={(e) => props.setMarkdown(e.target.value)}
          variant="filled"
          resize="none"
          overflow="scroll"
          flex="1"
        />
        <FormHelperText>本文をマークダウン形式で入力</FormHelperText>
      </FormControl>
    </Flex>
  );
};

export default MarkdownInput;
