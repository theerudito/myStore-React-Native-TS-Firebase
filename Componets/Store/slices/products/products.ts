/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    product: [],
    isLoading: true,
    clients: [],
    products: [],
    details: [],
  },
  reducers: {
    loadingData: (state, action) => {
      state.isLoading = action.payload;
    },
    getClients: (state, action) => {
      state.clients = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const {
  getProducts,
  loadingData,
  getClients,
  getDetails,
} = productsSlice.actions;
