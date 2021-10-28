import { createSlice } from "@reduxjs/toolkit";

const initialfilterState = { goal: {}, year: {}, isUT: false };

const filterSlice = createSlice({
  name: " filter",
  initialState: initialfilterState,
  reducers: {
    addGoal: (state, action) => {
      console.log('goal changed', action)
      state.goal = action.payload;
    },

    addYear: (state, action) => {
      state.year = action.payload;
    },

    addUT: (state, action) => {
      state.isUT = action.payload;
    },
    },
  },
);

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
