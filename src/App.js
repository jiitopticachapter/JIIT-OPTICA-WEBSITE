import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Mentor from "./pages/Mentor/Mentor";
import Contact from "./pages/Contact/Contact";
import Alumni  from "./pages/Alumini/Alumni";

import './App.css';
import "./index.css";


function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
   </>
  );
}

export default App;
