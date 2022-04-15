import React from 'react';
import { createRoot } from 'react-dom/client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { ChakraProvider } from '@chakra-ui/react';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

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
    {/* -- redux start -- */}
    <Provider store={store}>
      {/* -- chakra-ui start -- */}
      <CacheProvider value={cache}>
        <ChakraProvider>
          {/* -- app start -- */}
          <App />
          {/* -- app end -- */}
        </ChakraProvider>
      </CacheProvider>
      {/* -- chakra-ui end -- */}
    </Provider>
    {/* -- redux end -- */}
  </React.StrictMode>
);
