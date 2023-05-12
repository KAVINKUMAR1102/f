import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Team from "./routes/Team"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Event from "./routes/Events"


import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-app" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Event />} />     
      </Routes>
    </>
  );
}

export default App;
