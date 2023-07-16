import { createSlice } from "@reduxjs/toolkit";
//практика


export const myValueSlice = createSlice({
  name: "myValue",
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload
      //якщо   initialState: {value: 100}  то state.value += action.payload
    },
    decrement(state, action) {
      return state - action.payload
    },
  },
});

console.log(myValueSlice)// отримуємо actions

export const { increment, decrement } = myValueSlice.actions;