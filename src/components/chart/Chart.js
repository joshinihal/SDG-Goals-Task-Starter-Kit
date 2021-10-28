import { useSelector } from "react-redux";
import * as d3 from "d3";

import classes from './Chart.module.css';
import useData from "../../hooks/useData";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Bars from "./Bars";

const Chart = (props) => {

  // const goal = useSelector((state) => state.filters.goal);

  // const goal = useSelector((state) => state.data);

  // const temperatureData = useData();

  const temperatureData = useSelector((state) => state.data);

  console.log('temop', temperatureData)

  const width = 3000;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = (el) => el.name;
  const yValue = (el) => el.value;

  const yScale = d3.scaleLinear().domain([0, 100]).range([0, innerHeight]);
  const xScale = d3
    .scaleBand()
    .domain(temperatureData.map(xValue))
    .range([0, innerWidth])
    .padding(0.3)

  const xScaleLabels = d3
    .scaleBand()
    .domain(temperatureData.map(xValue))
    .range([0, innerWidth])
    .padding(0.3)

  const yScaleLabels = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

  return (
    <svg className={classes.chart} width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft yScaleLabels={yScaleLabels} innerWidth={innerWidth} />

        <AxisBottom innerHeight={innerHeight} xScaleLabels={xScaleLabels} />
        {/* <text className={classes.axisLabel} x={innerWidth/2} y={innerHeight + 35} textAnchor="middle">SDGs</text> */}
        <Bars
          innerHeight={innerHeight}
          temperatureData={temperatureData}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
        />
      </g>
    </svg>
  );
};

export default Chart;
