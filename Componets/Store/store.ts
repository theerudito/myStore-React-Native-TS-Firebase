/* eslint-disable */

import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from './slices/cart';

import {productsSlice} from './slices/products';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
