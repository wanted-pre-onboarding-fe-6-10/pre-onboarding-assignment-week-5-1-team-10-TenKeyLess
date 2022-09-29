import { createSlice } from '@reduxjs/toolkit';

const keywordsSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    addKeywords: (state, action) => {
      state[action.payload.searchWord] = action.payload.result;
    },
  },
});

export const { addKeywords } = keywordsSlice.actions;
export default keywordsSlice.reducer;
