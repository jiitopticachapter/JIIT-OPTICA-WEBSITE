import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Gallery from "./pages/Gallery/Gallery"
import JSCOP from "./pages/JSCOP/JSCOP"
import Events from "./pages/Events/Events"

import './App.css';
import "./index.css";


function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/JSCOP" element={<JSCOP />} />
      </Routes> 
   </>
  );
}

export default App;
