import React from 'react';
import { createRoot } from 'react-dom/client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
} from '@chakra-ui/react';

import { store } from '../redux/store';
import { Provider } from 'react-redux';

import { App } from '../components/App';
import '../styles/global.scss';

const container = document.getElementById('root');
if (container) {
  const nonce = document.head
    .querySelector('[property~=csp-nonce][content]')
    ?.getAttribute('content') as string;
  const cache = createCache({
    key: 'my-prefix-key',
    nonce: nonce,
    prepend: true,
  });
  const root = createRoot(container);

  const theme = extendTheme(
    withDefaultColorScheme({
      colorScheme: 'blue',
      components: ['Button'],
    }),
    withDefaultSize({
      size: 'sm',
      components: ['Button'],
    })
  );

  root.render(
    <React.StrictMode>
      {/* -- redux start -- */}
      <Provider store={store}>
        {/* -- chakra-ui start -- */}
        <CacheProvider value={cache}>
          <ChakraProvider theme={theme}>
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
}
