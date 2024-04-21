import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import Team from "./routes/Team/Team";
import Alumni from "./routes/Alumni/Alumni";
import Events from "./routes/Events/Events";
import Gallery from "./routes/Gallery/Gallery";
//import pageNotFound from './routes/pageNotFound/pageNotFound';

import "./App.css";
import "./index.css";
import Mentors from "./routes/MentorDetails/Mentors";
import Jscop from "./routes/JSCOP/Jscop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route exact path="/optica-website-2023" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/jscop" element={<Jscop />} />
        {/* <Route path="*" component={pageNotFound} /> */}
      </Routes>
    </>
  );
}

export default App;
