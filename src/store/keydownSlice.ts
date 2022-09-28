import { createSlice } from '@reduxjs/toolkit';

const keydownSlice = createSlice({
  name: 'keydown',
  initialState: { index: -1 },
  reducers: {
    setKeydown: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setKeydown } = keydownSlice.actions;
export default keydownSlice.reducer;
