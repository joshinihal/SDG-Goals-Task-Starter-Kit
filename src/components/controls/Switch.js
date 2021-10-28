import classes from "./Switch.module.css";

const Switch = () => {
  return (
    <div className={classes.switchContainer}>
      <span>
        <b>States</b>
      </span>
      <label className={classes.switch}>
        <input type="checkbox"></input>
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
      <span>
        <b>UTs</b>
      </span>
    </div>
  );
};

export default Switch;
