import React from "react";
import GitLogo from "../../images/github-mark-white.png";
import LiLogo from "../../images/In-Blue-Logo.png";
import Promocard from "../promocard/promocard";

const Selfpromo = () => {
  return (
    <div className="article">
      <div>
        Hi, my name is
        <h1>Benjamin Smolin</h1>
      </div>
      <p>
        I received a B.S. in Computer Science from Temple University in December, 2022. I'm interested in full-stack software development, FOSS,
        machine learning, and information visualizations. Outside of the world of computers, I like cycling, fishkeeping, and movies. I built this
        website to show off some of the bigger projects I'm proud of working on.
      </p>
      <Promocard
        name={"Expert Goggles"}
        title={"Research Asssistant"}
        info={"A tool for teaching data literacy powered by machine learning. Built as a Chrome extension, demo paper accepted at UIST 2022."}
      />
      <Promocard
        name={"StoryPages"}
        title={"Project Leader"}
        info={
          "A collaborative web application for drawing storyboards. Built with React.js and Node.js and supporting multiple canvasses. Live demo currently active!"
        }
      />

      <p>
        I'm currently looking for work in the software engineering world! If you'd like to connect professionally or are interested in collaborating
        on a project check out these links:
      </p>
      <div className="link-div">
        <a className="contact-link" href="https://github.com/b-smolin">
          <img src={GitLogo} alt="GitHub" /> GitHub ↗
        </a>
        <a className="contact-link" href="https://www.linkedin.com/in/benjamin-smolin-06722a101/">
          <img src={LiLogo} alt="LinkedIn" /> LinkedIn ↗
        </a>
      </div>
    </div>
  );
};

export default Selfpromo;
