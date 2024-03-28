import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
 } from 'react-router-dom'
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stars from "./components/Stars";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Stars />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App