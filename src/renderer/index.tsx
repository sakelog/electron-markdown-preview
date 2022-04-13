import React from 'react';
import { createRoot } from 'react-dom/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../layout/base';
import { App } from '../components/App';
import '../styles/global.scss';

const container = document.getElementById('root');
const root = container && createRoot(container);

const nonce = document.head
  .querySelector('[property~=csp-nonce][content]')
  ?.getAttribute('content') as string;
const cache = createCache({
  key: 'my-prefix-key',
  nonce: nonce,
  prepend: true,
});

root?.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ChakraProvider>
        <Layout>
          <App />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  </React.StrictMode>
);
