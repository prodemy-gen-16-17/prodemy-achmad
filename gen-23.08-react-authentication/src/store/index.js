import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import checkoutSlice from "./reducers/checkoutSlice";
import addToCartReducer from './reducers/addToCart';

const store = configureStore({
  reducer: {
    auth: authSlice,
    checkout: checkoutSlice,
    addToCart: addToCartReducer,
  },
});

export default store;