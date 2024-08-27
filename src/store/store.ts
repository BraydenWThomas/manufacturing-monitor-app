import { configureStore } from '@reduxjs/toolkit';
import processReducer from './processSlice';

const store = configureStore({
  reducer: {
    process: processReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;