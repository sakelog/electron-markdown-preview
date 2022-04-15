import React, { useCallback } from 'react';
import { Flex, Box, Heading, ButtonGroup, Button } from '@chakra-ui/react';

//import { FILE_EVENTS, saveFile, FileInfoType } from '../fileIO';
import { ipcRenderer } from 'electron';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// const openSaveAsDialog = (fileInfo: FileInfoType): void => {
//   ipcRenderer.send(FILE_EVENTS.SAVE_DIALOG, fileInfo);
// };

const Header = () => {
  // const title = useSelector<RootState>(
  //   (state) => state.mainState.title
  // ) as string;
  // const markdownBody = useSelector<RootState>(
  //   (state) => state.mainState.markdownBody
  // ) as string;
  // const handleFileSave = useCallback(() => {
  //   if (title) {
  //     saveFile(title, markdownBody);
  //   } else {
  //     openSaveAsDialog({
  //       fileName: '',
  //       fileContent: markdownBody,
  //     });
  //   }
  // }, [title, markdownBody]);
  return (
    <header>
      <Flex p={2} bg="blue.50" justifyContent="space-between">
        <Box>
          <Heading>Markdown Preview</Heading>
        </Box>
        <Box>
          <ButtonGroup>
            <Button colorScheme="blue">保存</Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
