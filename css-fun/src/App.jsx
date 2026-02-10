import "./App.css";
import Candles from "./components/Candles/Candles";
import Firefly from "./components/Firefly/Firefly";
import Ghosts from "./components/Ghosts/Ghosts";

function App() {
  return (
    <div className="card-container">
      <Ghosts />
      <Firefly />
      <Candles />
    </div>
  );
}

export default App;
