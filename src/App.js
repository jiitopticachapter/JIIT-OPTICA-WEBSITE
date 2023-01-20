import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import Team from "./routes/Team/Team";
import Mentor from "./routes/Mentor/Mentor";
import Contact from "./routes/Contact/Contact";
import Alumni  from "./routes/Alumni/Alumni";

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
