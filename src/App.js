import logo from "./logo.svg";
import "./App.css";
import Gameboard from "./Gameboard";

function App() {
  return (
    <div className="App">
      <div className="App-h1-wrapper">
        <h1 className="App-h1">Guess The Flag</h1>
      </div>
      <Gameboard />
    </div>
  );
}

export default App;
