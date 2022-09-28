import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { input: '' },
  reducers: {
    inputChange: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { inputChange } = inputSlice.actions;
export default inputSlice.reducer;
