import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ipcRenderer } from 'electron';

interface ProcessState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProcessState = {
  data: [],
  status: 'idle',
};

export const fetchProcessData = createAsyncThunk<any[]>('process/fetchProcessData', async () => {
  return new Promise<any[]>((resolve) => {
    ipcRenderer.once('process-data-response', (_, data) => {
      resolve(data);
    });
    ipcRenderer.send('get-process-data');
  });
});

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    updateProcessData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;  // Update the process data with new data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProcessData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProcessData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProcessData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateProcessData } = processSlice.actions;
export default processSlice.reducer;