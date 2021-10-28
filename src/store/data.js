import { createSlice } from "@reduxjs/toolkit";
import data2020 from '../data/2020.json';
import data2019 from '../data/2019.json';
import data2018 from '../data/2018.json';
import {UTS} from '../config/index';

const goalsData = {
  2020: data2020,
  2019: data2019,
  2018: data2018
};

const changeUrlState = (g, y, t) => {
  const url = `goal=${g}&year=${y}&type=${t}`;
  window.history.pushState({}, 'State Changed', url)
};

const initialdataState = {goals: goalsData[2020].map(element => {
   return {name: element.area_name, value: element.chartdata[0].value, id: element.area_code}  
}).filter(el => !(UTS.includes(el.id)))};

const dataSlice = createSlice({
  name: " data",
  initialState: initialdataState,
  reducers: {
    changeData: (state, action) => {
      changeUrlState(action.payload.goal.id, action.payload.year.value, action.payload.type.value);
      const index = action.payload.goal.id - 1;
      const goalsBeforeFilter = goalsData[action.payload.year.value].map(element => {
        return {name: element.area_name, value: element.chartdata[index].value, id: element.area_code}  
      });
      if (action.payload.type.value === 'States') {
        state.goals = goalsBeforeFilter.filter(el => !(UTS.includes(el.id)));
      } else {
        state.goals = goalsBeforeFilter.filter(el => (UTS.includes(el.id)));
      }
    },
    },
  },
);

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
