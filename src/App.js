import PersonalInfo from "./components/PersonalInfo/Personal_Info";
import Goggles from "./components/Experts/Goggles";
import Story from "./components/Story/Story";
import { Helmet } from "react-helmet";
import { React, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectNav from "./components/ProjectNav/ProjectNav";
import Selfpromo from "./components/SelfPromo/selfpromo";

//TODO:
//add tech tags
//improve link styling
//improve side nav styling
//improve copy
//mobile friendly styling

function App() {
  const [focusedProject, setFocusedProject] = useState("home");

  const changeFocus = (focus) => {
    setFocusedProject(focus);
  };

  document.body.style = "background: #121417;";

  return (
    <div className="site-container">
      <Helmet>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="Portfolio for Ben Smolin"></meta>
        <meta name="author" content="Ben Smolin"></meta>
        <title>Ben Smolin's Work</title>
      </Helmet>
      <div className="display-box">
        <ProjectNav changeFocus={changeFocus} active={focusedProject} />
        {focusedProject === "home" && <Selfpromo />}
        {focusedProject === "goggles" && <Goggles />}
        {focusedProject === "story" && <Story />}
      </div>
    </div>
  );
}

export default App;
