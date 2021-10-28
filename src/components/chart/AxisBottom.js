import classes from './AxisBottom.module.css';

const AxisBottom = (props) => {
  return props.xScaleLabels.domain().map((el) => (
    <g className={classes.tick} key={el} transform={`translate(${props.xScaleLabels(el)}, ${props.innerHeight + 35})`}>
      <text y="-10">
        <title>{el}</title>
        {`${el.slice(0,5)}...`}
      </text>
    </g>
  ));
};

export default AxisBottom;
