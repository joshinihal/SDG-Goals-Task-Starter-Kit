import classes from "./Bars.module.css";

const Bars = (props) => {
  return props.temperatureData.map((el) => (
    <rect
      className={classes.bar}
      key={props.yValue(el)}
      x={props.xScale(props.xValue(el))}
      y={props.innerHeight - props.yScale(props.yValue(el))}
      width={props.xScale.bandwidth()}
      height={props.yScale(props.yValue(el))}
    >
      <title>{props.yValue(el)}</title>
    </rect>
  ));
};

export default Bars;
