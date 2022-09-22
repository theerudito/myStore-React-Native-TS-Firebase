/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    createProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {getProducts, createProducts} = productsSlice.actions;
