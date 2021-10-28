import { createSlice } from "@reduxjs/toolkit";
import data2020 from "../data/2020.json";
import data2019 from "../data/2019.json";
import data2018 from "../data/2018.json";
import { UTS } from "../config/index";
import { changeUrlState, configureData } from "../utils/index";

const goalsData = {
  2020: data2020,
  2019: data2019,
  2018: data2018,
};

const initYear = 2020;
const initGoalIndex = 16;
const initType = 'States';

// initialize data which has default year, default goal and is not in union territories
// configure data from json file to use it accordingly
const initialdataState = {
  goals: configureData(goalsData, initYear, initGoalIndex).filter(
    (el) => !UTS.includes(el.id)
  ),
};

// append default state into url
changeUrlState(initGoalIndex, initYear, initType);

const dataSlice = createSlice({
  name: " data",
  initialState: initialdataState,
  reducers: {
    changeData: (state, action) => {
      const goalId = action.payload.goal.id;
      const yearValue = action.payload.year.value;
      const typeValue = action.payload.type.value;
      const index = goalId - 1;
      changeUrlState(goalId, yearValue, typeValue);
      const goalsBeforeFilter = configureData(goalsData, yearValue, index);
      if (typeValue === "States") {
        state.goals = goalsBeforeFilter.filter((el) => !UTS.includes(el.id));
      } else {
        state.goals = goalsBeforeFilter.filter((el) => UTS.includes(el.id));
      }
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
