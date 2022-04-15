import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { setHtmlAll } from '../redux/lib/slice';

import Layout from '../layout/base';
import loadable from '@loadable/component';
const MarkdownInput = loadable(() => import('./MarkdownInput'));
const Preview = loadable(() => import('./Preview'));
import { Grid, GridItem } from '@chakra-ui/react';

const { myAPI } = window;

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const markdownAll = useSelector<RootState>(
    (state) => state.mainState.markdownAll
  ) as string;
  const htmlAll = useSelector<RootState>(
    (state) => state.mainState.htmlAll
  ) as string;
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  useEffect(() => {
    myAPI.update(title);
    dispatch(setHtmlAll());
  }, [title, markdownAll, htmlAll]);

  return (
    <Layout>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
        h="100%"
      >
        <GridItem p={4} h="100%">
          <MarkdownInput />
        </GridItem>
        <GridItem h="100%" p={4} overflow="hidden">
          <Preview />
        </GridItem>
      </Grid>
    </Layout>
  );
};
