import React, { ReactNode } from 'react';
import Header from './header';
import { Flex, Box } from '@chakra-ui/react';

const LayoutBase = (props: { children: ReactNode }) => {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Box flex="1">{props.children}</Box>
    </Flex>
  );
};

export default LayoutBase;
