import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationState } from './location.types';

const initialState: ILocationState = {
  data: 'loc',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
