import { useSelector } from "react-redux";
import * as d3 from "d3";

import classes from "./Chart.module.css";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Bars from "./Bars";
import { UTS } from "../../config";

const Chart = (props) => {
  const sdgData = useSelector((state) => state.data.goals);
  const width = sdgData.length > UTS.length ? 3000 : 750; // decrease the size if only using union territories
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  // use inner with and keep margin on all sides of actual width
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // create some getter functions which will return props of given elements
  const xValue = (el) => el.name;
  const yValue = (el) => el.value;
  const keyValue = (el) => el.id;

  const yScale = d3.scaleLinear().domain([0, 100]).range([0, innerHeight]);

  const xScale = d3
    .scaleBand()
    .domain(sdgData.map(xValue))
    .range([0, innerWidth])
    .padding(0.3);

  const xScaleLabels = d3
    .scaleBand()
    .domain(sdgData.map(xValue))
    .range([0, innerWidth])
    .padding(0.3);

  const yScaleLabels = d3
    .scaleLinear()
    .domain([0, 100])
    .range([innerHeight, 0]);

  return (
    <svg className={classes.chart} width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft yScaleLabels={yScaleLabels} innerWidth={innerWidth} />
        <AxisBottom innerHeight={innerHeight} xScaleLabels={xScaleLabels} />
        <Bars
          innerHeight={innerHeight}
          sdgData={sdgData}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          keyValue={keyValue}
        />
      </g>
    </svg>
  );
};

export default Chart;
