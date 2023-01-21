import React from "react";
import Me from "../../images/smol-green-16bit.png";
import ProjectButton from "../ProjectButton/ProjectButton";

const ProjectNav = ({ changeFocus, active }) => {
  const projects = ["home", "goggles", "story"];
  const descriptions = ["Home", "Expert Goggles", "StoryPages"];

  return (
    <div className="nav-buttons">
      <img className="me-8bit" alt="" src={Me} width={"70px"} height={"70px"}></img>

      {projects.map((project, i) => {
        return <ProjectButton key={project} changeFocus={changeFocus} active={active === project} value={project} name={descriptions[i]} />;
      })}
    </div>
  );
};

export default ProjectNav;
