import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test example chart:</p>
        <Link to={"/chartjs"}>Chart.js</Link>
        <Link to={"/chartd3"}>Chart d3</Link>
      </header>
    </div>
  );
}

export default App;
