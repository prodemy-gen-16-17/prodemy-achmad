// checkoutReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, submitOrder } from '../actions/checkoutActions';

const initialState = {
  cart: [],
  orderSuccess: false,
};

const checkoutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.cart.push(action.payload);
    })
    .addCase(submitOrder, (state) => {
      // Lakukan tindakan pengiriman pesanan ke API di sini
      // Set orderSuccess ke true jika pesanan berhasil
      state.orderSuccess = true;
    });
});

export default checkoutReducer;

// const initialState = {
//     cart: [],
//   };
  
//   const checkoutReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       case 'REMOVE_FROM_CART':
//         return {
//           ...state,
//           cart: state.cart.filter((product) => product.id !== action.payload),
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default checkoutReducer;