import { createSlice } from "@reduxjs/toolkit";
import data2020 from '../data/2020.json';
import data2019 from '../data/2019.json';
import data2018 from '../data/2018.json';

const initialdataState = data2020.map(element => {
   return {name: element.area_name, value: element.chartdata[0].value, id: element.area_code}  
});

const dataSlice = createSlice({
  name: " data",
  initialState: initialdataState,
  reducers: {
    changeData: (state, action) => {
        if (action.payload.year === 2020) {
            state = data2020.map(element => {
                return {name: element.area_name, value: element.chartdata[0].value, id: element.area_code}  
             });
        } else if (action.payload.year === 2019) {
            state = data2019.map(element => {
                return {name: element.area_name, value: element.chartdata[1].value, id: element.area_code}  
             });
        } else {
            state = data2018.map(element => {
                return {name: element.area_name, value: element.chartdata[2].value, id: element.area_code}  
             });
        }
    },
    },
  },
);

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
