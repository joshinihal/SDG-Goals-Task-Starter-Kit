import classes from "./AxisBottom.module.css";

const AxisBottom = (props) => {
  return props.xScaleLabels.domain().map((el) => (
    <g
      className={classes.tick}
      key={el}
      // to bring axis label down, add inner height and some extra space so that it doesn't collide with x axis,
      transform={`translate(${props.xScaleLabels(el)}, ${
        props.innerHeight + 35
      })`}
    >
      <text textAnchor="center" y="-10">
        {/* slice so that all the axis labels don't collide, add title for tooltip*/}
        <title>{el}</title>
        {`${el.slice(0, 5)}...`}
      </text>
    </g>
  ));
};

export default AxisBottom;
