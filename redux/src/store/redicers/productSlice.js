import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      name: 'Iphone 12',
      price: 1200,
    },
    {
      id: 2,
      name: 'Samsung S21',
      price: 1100,
    },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
