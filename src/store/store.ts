import { configureStore } from '@reduxjs/toolkit';
import processReducer from './processSlice';
import anotherProcessReducer from './anotherProcessSlice'; // Import the new slice

const store = configureStore({
  reducer: {
    process: processReducer,
    anotherProcess: anotherProcessReducer, // Add it to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
