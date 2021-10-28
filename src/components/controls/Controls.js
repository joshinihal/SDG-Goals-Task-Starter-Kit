import { useState } from "react";
import { useDispatch } from "react-redux";

import { GOALS_LIST } from "../../config/index";
import { YEARS } from "../../config/index";
import { TYPES } from "../../config/index";
import Dropdown from "./Dropdown";
import Switch from "./Switch";
import classes from "./Controls.module.css";
import { dataActions } from "../../store/data";

const Controls = () => {
  const dispatch = useDispatch();

  const [selectedGoal, setSelectedGoal] = useState(GOALS_LIST[16]);
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [selectedType, setSelectedType] = useState(TYPES[0]);

  const handleGoalsChange = (goal) => {
    setSelectedGoal(goal);
    dispatch(dataActions.changeData({goal: goal, year: selectedYear, type: selectedType}));
  };

  const handleYearsChange = (year) => {
    setSelectedYear(year);
    dispatch(dataActions.changeData({goal: selectedGoal, year: year, type: selectedType}));
  };

  const handleTypesChange = (type) => {
    setSelectedType(type);
    dispatch(dataActions.changeData({goal: selectedGoal, year: selectedYear, type: type}));
  };

  return (
    <div className={classes.control}>
      <Dropdown
        label="Goal"
        onChange={handleGoalsChange}
        options={GOALS_LIST}
        defaultValueIndex={16}
      />
      <Dropdown
        label="Year"
        onChange={handleYearsChange}
        options={YEARS}
        defaultValueIndex={0}
      />
      <Switch types={TYPES} onChange={handleTypesChange}/>
    </div>
  );
};

export default Controls;
