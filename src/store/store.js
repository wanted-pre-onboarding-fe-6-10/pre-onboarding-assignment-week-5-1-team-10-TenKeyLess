import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './keywordsSlice';

const store = configureStore({
  reducer: {
    keywords: keywordsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
