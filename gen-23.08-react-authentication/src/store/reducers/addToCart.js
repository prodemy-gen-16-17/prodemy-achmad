import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Inisialisasi sebagai array kosong untuk menyimpan item di keranjang
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        // Jika produk sudah ada dalam keranjang, tambahkan jumlahnya
        existingProduct.qty += productToAdd.qty;
      } else {
        // Jika produk belum ada dalam keranjang, tambahkan produk baru
        state.cartItems.push(productToAdd);
      }
    },
  },
});

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
