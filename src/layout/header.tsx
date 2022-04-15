import React from 'react';
import { Flex, Spacer, Box, Heading, ButtonGroup } from '@chakra-ui/react';

import FileInputButton from '../components/FileOpenButton';
import FileSaveAsMdButton from '../components/FileSaveAsMdButton';
import FileSaveAsHtmlButton from '../components/FileSaveAsHtmlButton';

const Header = () => {
  return (
    <header>
      <Flex p={2} bg="blue.50" flexWrap="wrap">
        <Box>
          <Heading>Markdown Preview</Heading>
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup>
            <FileInputButton />
            <FileSaveAsMdButton />
            <FileSaveAsHtmlButton />
          </ButtonGroup>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
