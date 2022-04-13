import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
const MarkdownInput = loadable(() => import('./MarkdownInput'));
const Preview = loadable(() => import('./Preview'));

import { Grid, GridItem } from '@chakra-ui/react';

const { myAPI } = window;

export const App = () => {
  const [title, setTitle] = useState<string>('title');
  const [markdown, setMarkdown] = useState<string>('## test');

  useEffect(() => {
    myAPI.update(title);
  }, [title]);

  return (
    <Grid
      templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
      h="100vh"
    >
      <GridItem p={4} h="100%">
        <MarkdownInput
          title={title}
          setTitle={setTitle}
          markdown={markdown}
          setMarkdown={setMarkdown}
        />
      </GridItem>
      <GridItem h="100%" p={4} overflow="hidden">
        <Preview title={title} markdown={markdown} />
      </GridItem>
    </Grid>
  );
};
