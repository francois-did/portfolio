import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About"; 
import "./App.css";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#mes-projets") {
      const element = document.getElementById("mes-projets");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
