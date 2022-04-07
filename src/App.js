import "./App.css";
import { AllProjects } from "./components/Projects/AllProjects.jsx";
import { Container } from "./components/Container";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
