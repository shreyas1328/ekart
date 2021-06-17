import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  cartAllData: [],
  cartOneItem: {},
  cartSize: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const doesExists = state.cartAllData.find(
        (ele) => ele.id == action.payload.id
      );
      if (doesExists) {
        const index = state.cartAllData.findIndex(
          (ele) => ele.id == action.payload.id
        );
        state.cartAllData.splice(index, 1, action.payload);
      } else {
        state.cartAllData = [...state.cartAllData, action.payload];
      }
    },
    getCartOneItem: (state, action) => {
        console.log("back ", state.cartAllData.find(
            (ele) => ele.id == action.payload
          ));
      state.cartOneItem = state.cartAllData.find(
        (ele) => ele.id == action.payload
      );
    },
    cartQuantity: (state, action) => {
      state.cartSize = state.cartAllData.length;
    },
    removeItem: (state, action) => {
      const index = state.cartAllData.findIndex(
        (ele) => ele.id == action.payload
      );
      state.cartAllData = [
        ...state.cartAllData.slice(0, index),
        ...state.cartAllData.slice(index + 1, state.cartAllData.length),
      ];
    },
  },
});

export const { addToCart, getCartOneItem, cartQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
