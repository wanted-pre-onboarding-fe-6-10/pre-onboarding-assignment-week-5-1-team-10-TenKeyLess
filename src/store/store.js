import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    keywords: searchReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
