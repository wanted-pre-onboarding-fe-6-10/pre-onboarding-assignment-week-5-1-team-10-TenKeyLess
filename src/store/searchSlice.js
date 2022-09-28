import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    addKeywords: (state, action) => {
      state[action.payload.searchText] = action.payload.result;
    },
  },
});

export const { addKeywords } = searchSlice.actions;
export default searchSlice.reducer;
