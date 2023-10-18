import React, { createContext, useContext, useReducer } from 'react';

// Buat konteks pesanan
const OrderContext = createContext();

// Fungsi untuk mengupdate pesanan
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Tambahkan item ke dalam pesanan
      return { ...state, items: [...state.items, action.payload] };
    case 'SUBMIT_ORDER':
      // Lakukan tindakan saat order dikirim
      // Misalnya, mengirim data ke API
      return { ...state, submitted: true };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [order, dispatch] = useReducer(orderReducer, { items: [], submitted: false });

  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
