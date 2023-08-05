import React from "react";
import "./App.css";
import { Navbar } from "./components/componentsExport";
import { Home, About, Skill, Project, Contact } from "./pages/pagesExport";

const App = () => {
  return (
    <div>
      <div className=" sticky top-0 z-[1000]">
        <Navbar />
      </div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
