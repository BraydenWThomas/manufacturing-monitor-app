import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ipcRenderer } from 'electron';

interface AnotherProcessState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AnotherProcessState = {
  data: [],
  status: 'idle',
};

export const fetchAnotherProcessData = createAsyncThunk<any[]>('anotherProcess/fetchAnotherProcessData', async () => {
  return new Promise<any[]>((resolve) => {
    ipcRenderer.once('another-process-data-response', (_, data) => {
      resolve(data);
    });
    ipcRenderer.send('get-another-process-data');
  });
});

const anotherProcessSlice = createSlice({
  name: 'anotherProcess',
  initialState,
  reducers: {
    updateAnotherProcessData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnotherProcessData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnotherProcessData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAnotherProcessData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateAnotherProcessData } = anotherProcessSlice.actions;
export default anotherProcessSlice.reducer;
