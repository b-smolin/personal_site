import PersonalInfo from "./components/PersonalInfo/Personal_Info";
import Goggles from "./components/Experts/Goggles";
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
            setShowGoggles(!showGoggles);
          }}
        >
          Expert Goggles
        </button>
        <button
          className="project-button"
          onClick={() => {
            setShowStory(!showStory);
          }}
        >
          StoryBored
        </button>
      </div>
      <PersonalInfo />
      {showGoggles && <Goggles />}
    </div>
  );
}

export default App;
