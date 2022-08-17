import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let newProduct = action.payload;
      let addedItem = state.cart.find((cI) => cI.product.id === newProduct.id);
      if (addedItem) {
        addedItem["count"] += 1;
      } else {
        state.cart.push({ product: newProduct, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
