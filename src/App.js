import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Looky from "./pages/Looky";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/looky" element={<Looky />} />
        <Route path="*"  element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
