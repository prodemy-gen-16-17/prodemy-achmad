import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/checkoutSlice";
import addToCartReducer from './reducers/addToCart';

const store = configureStore({
  reducer: {
    checkout: checkoutSlice,
    addToCart: addToCartReducer,
  },
});

export default store;