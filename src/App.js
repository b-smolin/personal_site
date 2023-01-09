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
//improve copy
//host and link to storypages
//mobile friendly styling

function App() {
  const [focusedProject, setFocusedProject] = useState("goggles");

  const changeFocus = (focus) => {
    setFocusedProject(focus);
  };

  return (
    <div className="site-container">
      <Helmet>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="Portfolio for Ben Smolin"></meta>
        <meta name="author" content="Ben Smolin"></meta>
        <title>Ben Smolin's Work</title>
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
