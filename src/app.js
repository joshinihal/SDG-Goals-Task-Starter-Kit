import "./app.css";

import { GOALS_LIST } from "./config/index";
import { YEARS } from "./config/index";

import Dropdown from "./components/controls/Dropdown";
import Chart from "./components/chart";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <div className="side">
        <div className="control">
          <Dropdown options={GOALS_LIST}/>
          <Dropdown options={YEARS}/>
        </div>
        <Chart />
      </div>
      <Map />
    </div>
  );
}

export default App;
