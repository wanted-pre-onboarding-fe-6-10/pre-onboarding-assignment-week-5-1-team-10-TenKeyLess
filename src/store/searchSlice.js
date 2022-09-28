import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    addKeywords: (state, action) => {
      state[action.payload.id] = action.payload;
    },
  },
});

export const { addKeywords } = searchSlice.actions;
export default searchSlice.reducer;
