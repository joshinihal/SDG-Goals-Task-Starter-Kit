import { useState } from "react";
import classes from "./Switch.module.css";

const Switch = (props) => {

    const [isSwitchedOn, setIsSwitchedOn] = useState(false)

    const handleChange = (e) => {
        setIsSwitchedOn((prevState)=> !prevState)
        if (isSwitchedOn) {
            props.onChange(props.types[0]);
        } else {
            props.onChange(props.types[1]);
        }
    };

  return (
    <div className={classes.switchContainer}>
      <span>
        <b>States</b>
      </span>
      <label className={classes.switch}>
        <input checked={isSwitchedOn} onChange={handleChange} type="checkbox"></input>
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
      <span>
        <b>UTs</b>
      </span>
    </div>
  );
};

export default Switch;
