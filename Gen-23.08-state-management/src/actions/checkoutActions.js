// checkoutActions.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('checkout/addToCart');
export const submitOrder = createAction('checkout/submitOrder');

// export const addToCart = (product) => {
//     return {
//       type: 'ADD_TO_CART',
//       payload: product,
//     };
//   };
  
//   export const removeFromCart = (productId) => {
//     return {
//       type: 'REMOVE_FROM_CART',
//       payload: productId,
//     };
//   };
  