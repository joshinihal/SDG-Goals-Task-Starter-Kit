import classes from "./Bars.module.css";

const Bars = (props) => {
  return props.sdgData.map((el) => (
    <rect
      className={classes.bar}
      key={props.keyValue(el)}
      x={props.xScale(props.xValue(el))}
      // subtract from inner height to start bar from bottom
      // add null check before subtracting using nullish coalescing operator
      y={props.innerHeight - (props.yScale(props.yValue(el)) ?? 0)}
      width={props.xScale.bandwidth()}
      height={props.yScale(props.yValue(el))}
    >
      <title>{props.yValue(el)}</title>
    </rect>
  ));
};

export default Bars;
