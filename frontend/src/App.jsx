import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Ylatunniste from "./components/Ylatunniste";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./context/GlobalState";
import Urheilijat from "./components/Urheilijat";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";

function App() {
  return (
    <GlobalState>
      <Router>
        <h3>
          Urheilijat-sovellus
          <small className="text-muted"> Tehtävä3</small>
        </h3>
        <Ylatunniste />
        <div className="container">
          <Routes>
            <Route path="/" element={<Urheilijat />} />
            <Route path="/urheilija/lisaa" element={<LisaaUrheilija />} />
            <Route
              path="/urheilija/muokkaa/:id"
              element={<MuokkaaUrheilija />}
            />
          </Routes>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
