/* eslint-disable */
import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
    counter: 0,
    datetails: [],
  },
  reducers: {
    AddCart: (state: any, action: any) => {
      const id = action.payload.id;
      const vUnitary = action.payload.price;

      if (state.cart.findIndex((itemOld: any) => itemOld.id === id) < 0) {
        state.cart = [
          ...state.cart,
          {...action.payload, quantity: 1, vUnitary},
        ];
      } else {
        state.cart = state.cart.map((itemOld: any) => {
          if (itemOld.id === id) {
            return {
              ...itemOld,
              quantity: itemOld.quantity + 1,
            };
          } else {
            return itemOld;
          }
        });
      }
    },
    removeCart: (state: any, action: any) => {
      const id = action.payload;
      state.cart = state.cart.filter((item: any) => item.id !== id);
      if (state.cart.length === 0) {
        state.counter = 0;
      }
    },
    addCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
    getTotal: (state, action) => {
      const vTotal = state.cart.reduce((acc: any, item: any) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.total = vTotal;
    },
    getPayment: (state, action) => {
      console.log(action.payload);
      state.datetails = action.payload;
      state.cart = [];
      state.counter = 0;
      state.total = 0;
    },
  },
});

export const {AddCart, addCounter, getTotal, removeCart, getPayment} =
  cartSlice.actions;
