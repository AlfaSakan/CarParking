import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  value2: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action) {
      state.value += action.payload;
      state.value2 += action.payload - 1;
    },
    //decrement
    //reset
  },
});

export const {incremented, amountAdded} = counterSlice.actions;
export default counterSlice.reducer;
