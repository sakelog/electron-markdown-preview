import { configureStore } from '@reduxjs/toolkit';
import slice from './lib/slice';
//import titleSlice from './lib/titleSlice';

export const store = configureStore({
  reducer: {
    mainState: slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
