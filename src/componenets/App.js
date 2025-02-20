import React from "react";
import './App.css';
import Services from "./Services/Services";
import Team from "./Team/Team";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <Services />
      <Team />
      <Projects />
    </div>
  );
}

export default App;
