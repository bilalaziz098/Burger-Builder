import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  orderArr: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderConfirm: (state, action) => {
      state.orders = action.payload;
      // state.orderArr = [...state.orderArr, action.payload];
      state.orderArr = Array.isArray(state.orderArr)
        ? [...state.orderArr, action.payload]
        : [action.payload];
      // state.orderArr.push(action.payload);
    },
    updateArr: (state, action) => {
      state.orderArr = action.payload;
    },
  },
});

export const { orderConfirm, updateArr } = orderSlice.actions;

export default orderSlice.reducer;
