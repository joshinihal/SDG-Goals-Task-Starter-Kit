import classes from "./AxisLeft.module.css";

const AxisLeft = (props) => {
  return props.yScaleLabels.ticks().map((el) => (
    <g
      className={classes.tick}
      key={el}
      transform={`translate(0, ${props.yScaleLabels(el)})`}
    >
      <line
        // zero is default
        // x1={0}
        // y1={0}
        // add some extra space to width so lines doesn't collide with svg border
        x2={props.innerWidth + 3}
        // y2={0}
      />
      {/* add some extra space to negative of x so labels don't collide with axis */}
      <text x="-20">{el}</text>
    </g>
  ));
};

export default AxisLeft;
