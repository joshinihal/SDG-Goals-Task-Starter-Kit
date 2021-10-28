import { createSlice } from "@reduxjs/toolkit";
import data2020 from '../data/2020.json';
import data2019 from '../data/2019.json';
import data2018 from '../data/2018.json';

const goalsData = {
  2020: data2020,
  2019: data2019,
  2018: data2018
};

const initialdataState = goalsData[2020].map(element => {
   return {name: element.area_name, value: element.chartdata[0].value, id: element.area_code}  
});

const dataSlice = createSlice({
  name: " data",
  initialState: initialdataState,
  reducers: {
    changeData: (state, action) => {
      console.log(action)
      const index = action.payload.goal.id - 1;
      state = goalsData[action.payload.year.value].map(element => {
          return {name: element.area_name, value: element.chartdata[index].value, id: element.area_code}  
       });
    },
    },
  },
);

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
