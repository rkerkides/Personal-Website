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
import { AuroraBackground } from "./components/ui/aurora-background";


const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 5000); // 5 seconds for the preloader (to ensure tsParticles are loaded)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <AuroraBackground className="aurora-background" showRadialGradient={true} >
        <Stars />
        <Navbar />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        </div>
        <Footer />
      </AuroraBackground>
      </div>
    </Router>
  )
}

export default App
