import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => state.value + 1,
    decrement: (state) => state.value - 1,
    setValue: (state, action) => action.payload,
  },
});

export const { increment, decrement, setValue } = counterSlice.actions;

export default counterSlice.reducer;
