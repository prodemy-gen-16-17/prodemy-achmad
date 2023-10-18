// import { createStore, combineReducers } from 'redux';
// import checkoutReducer from '../reducers/checkoutReducer';
import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from '../reducers/checkoutReducer';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    // Reducers lainnya
  },
});
//   const rootReducer = combineReducers({
//     checkout: checkoutReducer,
    // tambahkan reducer-reducer lain di sini jika diperlukan
//   });
// const store = createStore(rootReducer);
export default store;
