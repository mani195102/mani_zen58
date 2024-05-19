// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
      } else {
        state.cart.push({ ...product, quantity: 1, totalPrice: product.price });
      }
      state.total += product.price;
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        state.total -= product.totalPrice;
        state.totalQuantity -= product.quantity;
        state.cart = state.cart.filter(item => item.id !== productId);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity < product.stock) {
        product.quantity += 1;
        product.totalPrice = product.price * product.quantity;
        state.total += product.price;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.totalPrice = product.price * product.quantity;
        state.total -= product.price;
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
