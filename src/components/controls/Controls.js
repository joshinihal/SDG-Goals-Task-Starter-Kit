import { useState } from "react";
import { useDispatch } from "react-redux";

import { GOALS_LIST } from "../../config/index";
import { YEARS } from "../../config/index";
import Dropdown from "./Dropdown";
import Switch from "./Switch";
import classes from "./Controls.module.css";
import { filterActions } from "../../store/filters";
import { dataActions } from "../../store/data";

const Controls = () => {
  const dispatch = useDispatch();

  const [selectedGoal, setSelectedGoal] = useState(GOALS_LIST[16]);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);

  const handleGoalsChange = (goal) => {
    setSelectedGoal(goal);
    // dispatch(filterActions.addGoal(goal));
    dispatch(dataActions.changeData({goal: goal, year: selectedYear}));
  };

  const handleYearsChange = (year) => {
    setSelectedYear(year);
    // dispatch(filterActions.addYear(year));
    dispatch(dataActions.changeData({goal: selectedGoal, year: year}));
  };

  return (
    <div className={classes.control}>
      <Dropdown
        label="Goal"
        onChange={handleGoalsChange}
        options={GOALS_LIST}
        defaultValueIndex={0}
      />
      <Dropdown
        label="Year"
        onChange={handleYearsChange}
        options={YEARS}
        defaultValueIndex={0}
      />
      <Switch />
    </div>
  );
};

export default Controls;
