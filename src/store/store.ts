import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
