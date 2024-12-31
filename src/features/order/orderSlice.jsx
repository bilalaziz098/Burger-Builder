import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  orderArr: [],
  price: "4.00",
  saladDiv: [],
  saladCount: 0,
  baconDiv: [],
  baconCount: 0,
  cheeseDiv: [],
  cheeseCount: 0,
  meatDiv: [],
  meatCount: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderConfirm: (state, action) => {
      state.orders = action.payload;
      state.orderArr = Array.isArray(state.orderArr)
        ? [...state.orderArr, action.payload]
        : [action.payload];
    },
    addSalad: (state) => {
      const newSaladCount = state.saladCount + 1;
      console.log(state.saladCount);
      return {
        ...state,
        price: (parseFloat(state.price) + 0.5).toFixed(2),
        saladCount: newSaladCount,
      };
    },

    lessSalad: (state) => {
      const newSaladCount = state.saladCount - 1;
      return {
        ...state,
        price: (parseFloat(state.price) - 0.5).toFixed(2),
        saladCount: newSaladCount,
      };
    },
    addBacon: (state) => {
      const newBaconCount = state.baconCount + 1;
      return {
        ...state,
        price: (parseFloat(state.price) + 0.7).toFixed(2),
        baconCount: newBaconCount,
      };
    },

    lessBacon: (state) => {
      const newBaconCount = state.baconCount - 1;
      return {
        ...state,
        price: (parseFloat(state.price) - 0.7).toFixed(2),
        baconCount: newBaconCount,
      };
    },
    addCheese: (state) => {
      const newCheeseCount = state.cheeseCount + 1;
      return {
        ...state,
        price: (parseFloat(state.price) + 0.4).toFixed(2),
        cheeseCount: newCheeseCount,
      };
    },

    lessCheese: (state) => {
      const newCheeseCount = state.cheeseCount - 1;
      return {
        ...state,
        price: (parseFloat(state.price) - 0.4).toFixed(2),
        cheeseCount: newCheeseCount,
      };
    },
    addMeat: (state) => {
      const newMeatCount = state.meatCount + 1;
      return {
        ...state,
        price: (parseFloat(state.price) + 1.3).toFixed(2),
        meatCount: newMeatCount,
      };
    },

    lessMeat: (state) => {
      const newMeatCount = state.meatCount - 1;
      return {
        ...state,
        price: (parseFloat(state.price) - 1.3).toFixed(2),
        meatCount: newMeatCount,
      };
    },

    updateSaladDivs: (state, action) => {
      state.saladDiv = action.payload;
    },
    updateBaconDivs: (state, action) => {
      state.baconDiv = action.payload;
    },
    updateCheeseDivs: (state, action) => {
      state.cheeseDiv = action.payload;
    },
    updateMeatDivs: (state, action) => {
      state.meatDiv = action.payload;
    },

    resetBurger: (state) => {
      return {
        ...state,
        price: "4.00",
        saladCount: 0,
        saladDiv: [],
        baconDiv: [],
        baconCount: 0,
        cheeseDiv: [],
        cheeseCount: 0,
        meatDiv: [],
        meatCount: 0,
      };
    },

    updateArr: (state, action) => {
      state.orderArr = action.payload;
    },
  },
});

export const {
  orderConfirm,
  updateArr,
  resetBurger,
  addSalad,
  lessSalad,
  addBacon,
  lessBacon,
  addCheese,
  lessCheese,
  addMeat,
  lessMeat,
  updateSaladDivs,
  updateBaconDivs,
  updateCheeseDivs,
  updateMeatDivs,
} = orderSlice.actions;

export default orderSlice.reducer;
