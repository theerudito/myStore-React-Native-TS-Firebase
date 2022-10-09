/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    product: [],
    isLoading: false,
    clients: [],
    products: [],
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    createProducts: (state, action) => {
      state.product = action.payload;
    },
    loadingData: (state, action) => {
      state.isLoading = action.payload;
    },
    getClients: (state, action) => {
      state.clients = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {getProduct, getProducts, createProducts, loadingData, getClients} =
  productsSlice.actions;
