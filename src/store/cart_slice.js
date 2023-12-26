import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //if item exist, we change price and quantity of it(existing)
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
    },

    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      // Cannot remove an item that does not exist or has zero quantity
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        } else {
        }
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;

        state.totalQuantity -= 1;
      }
    },
  },
});
// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice;
