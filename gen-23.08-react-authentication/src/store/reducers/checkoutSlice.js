import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  dataCheckout: {}, // Menambahkan properti untuk data checkout
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.qty += productToAdd.qty;
      } else {
        state.cartItems.push(productToAdd);
      }
    },
    checkoutBooking: (state, action) => {
      state.dataCheckout = action.payload; // Menyimpan data checkout
    },
  },
});

export const { addToCart, checkoutBooking } = addToCartSlice.actions;

export default addToCartSlice.reducer;

