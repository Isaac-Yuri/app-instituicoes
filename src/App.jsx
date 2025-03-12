import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/outros" element={<Outros />} />
      </Routes>
    </Router>
  );
}

export default App;
