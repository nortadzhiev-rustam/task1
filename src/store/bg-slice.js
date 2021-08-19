import { createSlice } from '@reduxjs/toolkit';

const bgSlice = createSlice({
  name: 'color',
  initialState: {bg: ''},
  reducers: {
    addColor: (state, action) => {
        const bg = action.payload;
      return {...state, bg}
    },
  },
});

export const bgActions = bgSlice.actions;

export default bgSlice;
