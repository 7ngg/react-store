import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../Entities/product";
import { v4 as uuidv4 } from "uuid";

export interface ICartItem extends Product {
  uuid: string;
}

type CartState = {
  list: ICartItem[];
};

const initialState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.list.push({
        ...action.payload,
        uuid: uuidv4(),
      });

      state.list.forEach((i) => console.log(i));
    },
    removeItem(state, action: PayloadAction<string>) {
      state.list = state.list.filter((i) => i.uuid !== action.payload);
    },
    clear(state) {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
