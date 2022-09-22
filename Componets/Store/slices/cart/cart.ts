/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    counter: 0,
  },
  reducers: {
    AddCart: (state: any, action: any) => {
      state.cart = [...state.cart, action.payload];
    },
    addCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
  },
});

export const {AddCart, addCounter} = cartSlice.actions;
