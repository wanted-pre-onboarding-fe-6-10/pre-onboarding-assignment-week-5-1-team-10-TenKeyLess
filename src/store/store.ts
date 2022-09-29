import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import updateSlice from './updateSlice';
import inputSlice from './inputSlice';
import keydownSlice from './keydownSlice';

const rootReducer = combineReducers({
  input: inputSlice,
  list: updateSlice,
  key: keydownSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
