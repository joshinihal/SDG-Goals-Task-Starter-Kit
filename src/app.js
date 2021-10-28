import "./app.css";

import Chart from "./components/chart/Chart";
import Controls from "./components/controls/Controls";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <div className="side">
        <Controls />
        <div className="chartContainer">
          <Chart />
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
