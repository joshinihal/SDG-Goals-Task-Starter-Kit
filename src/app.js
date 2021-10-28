import { useState } from "react";
import { useDispatch } from "react-redux";

import "./app.css";
import { GOALS_LIST } from "./config/index";
import { YEARS } from "./config/index";
import Dropdown from "./components/controls/Dropdown";
import Chart from "./components/chart/Chart";
import Map from "./components/map";
import { filterActions } from './store/filters';

function App() {

  const dispatch = useDispatch();

  // const [selectedGoal, setSelectedGoal] = useState(null);
  // const [selectedYear, setSelectedYear] = useState(null);

  const handleGoalsChange = (goal) => {
    dispatch(filterActions.addGoal(goal));
    // setSelectedGoal(goal);
  };

  const handleYearsChange = (year) => {
    dispatch(filterActions.addYear(year));
    // setSelectedYear(year);
  };

  return (
    <div className="App">
      <div className="side">
        <div className="control">
          <Dropdown label="Goal" onChange={handleGoalsChange} options={GOALS_LIST} defaultValueIndex={3}/>
          <Dropdown label="Year" onChange={handleYearsChange} options={YEARS} defaultValueIndex={3}/>
        </div>
        <div className="chartContainer">
          <Chart/>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
