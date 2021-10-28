import classes from './AxisLeft.module.css';

const AxisLeft = (props) => {
  return props.yScaleLabels.ticks().map((el) => (
    <g className={classes.tick} key={el} transform={`translate(0, ${props.yScaleLabels(el)})`}>
      <line
        // zero is default
        // x1={0}
        // y1={0}
        x2={props.innerWidth + 3}
        // y2={0}
      />
      <text x="-20">{el}</text>
    </g>
  ));
};

export default AxisLeft;
