import { createSlice } from '@reduxjs/toolkit';
import { Keywords } from '../types/commonTypes';

export const initialList: Array<Keywords> = [];

const updateSlice = createSlice({
  name: 'filter',
  initialState: { list: initialList },
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { updateList } = updateSlice.actions;
export default updateSlice.reducer;
