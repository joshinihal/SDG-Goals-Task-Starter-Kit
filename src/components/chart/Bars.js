import classes from "./Bars.module.css";

const Bars = (props) => {
  console.log('props', props.sdgData)
  return props.sdgData.map((el) => (
    <rect
      className={classes.bar}
      key={props.keyValue(el)}
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
