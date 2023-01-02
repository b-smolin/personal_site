import PersonalInfo from "./components/PersonalInfo/Personal_Info";
import Goggles from "./components/Experts/Goggles";
import Story from "./components/Story/Story";
import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//TODO:
//refactor project buttons into their own components
//change color when selected
//fix styling for buttons
//improve copy

function App() {
  const [showGoggles, setShowGoggles] = useState(true);
  const [showStory, setShowStory] = useState(false);

  return (
    <div className="site-container">
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Smol Ben's Dev Hut</title>
      </Helmet>
      <div className="display-box">
        <div>
          <button
            className="project-button"
            onClick={() => {
              setShowGoggles(true);
              setShowStory(false);
            }}
          >
            Expert Goggles
          </button>
          <button
            className="project-button"
            onClick={() => {
              setShowGoggles(false);
              setShowStory(true);
            }}
          >
            StoryBored
          </button>
        </div>
        <PersonalInfo />
        {showGoggles && <Goggles />}
        {showStory && <Story />}
      </div>
    </div>
  );
}

export default App;
