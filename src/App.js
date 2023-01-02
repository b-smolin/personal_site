import PersonalInfo from "./components/PersonalInfo/Personal_Info";
import Goggles from "./components/Experts/Goggles";
import Story from "./components/Story/Story";
import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showGoggles, setShowGoggles] = useState(true);
  const [showStory, setShowStory] = useState(false);

  return (
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
  );
}

export default App;
