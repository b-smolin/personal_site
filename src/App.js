import PersonalInfo from "./components/PersonalInfo/Personal_Info";
import Goggles from "./components/Experts/Goggles";
import Story from "./components/Story/Story";
import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectNav from "./components/ProjectNav/ProjectNav";

//TODO:
//fix styling for buttons
//improve copy
//add links to popups

function App() {
  const [focusedProject, setFocusedProject] = useState("goggles");

  const changeFocus = (focus) => {
    setFocusedProject(focus);
  };

  return (
    <div className="site-container">
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Smol Ben's Dev Hut</title>
      </Helmet>
      <div className="display-box">
        <PersonalInfo />
        <div>
          <ProjectNav changeFocus={changeFocus} active={focusedProject} />
        </div>
        <div></div>
        {focusedProject === "goggles" && <Goggles />}
        {focusedProject === "story" && <Story />}
      </div>
    </div>
  );
}

export default App;
