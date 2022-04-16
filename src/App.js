import "./App.css";
import { Container } from "./components/Container";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
