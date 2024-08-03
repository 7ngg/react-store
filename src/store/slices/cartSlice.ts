import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Entities/product";

type CartState = {
  list: Product[];
};

const initialState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.list.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      const updatedItems = [...state.list]
      updatedItems.splice(action.payload, 1)
      state.list = updatedItems;
    },
    clear(state) {
      state.list = [];
    },
    writeToStorage(state) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(state.list))
    }
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
