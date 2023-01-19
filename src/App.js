import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import Team from "./routes/Team";
import Mentor from "./routes/Mentor";
import Contact from "./routes/Contact";
import Alumni  from "./routes/Alumni";
import './App.css';
import { Route, Routes } from "react-router-dom";

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
