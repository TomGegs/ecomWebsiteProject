import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const itemIndex = state.products.findIndex((item) => item.id === action.payload.id);
      
        if (itemIndex !== -1) {
          state.products[itemIndex].quantity += action.payload.quantity;
        } else {
          state.products = [...state.products, action.payload];
        }
      },
      

    removeItem: (state, action) => {
        const itemIndex = state.products.findIndex((item) => item.id === action.payload);
      
        if (itemIndex !== -1) {
          state.products[itemIndex].quantity -= 1;
          if (state.products[itemIndex].quantity <= 0) {
            state.products = state.products.filter((item) => item.id !== action.payload);
          }
        }
      },
      



    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
