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
import { AuroraBackground } from "./components/ui/aurora-background";


const App = () => {

  return (
    <Router>
      <div className="App" id={"scroll"}>
      <AuroraBackground className="aurora-background" showRadialGradient={true} >
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
