import React from "react";
import ProjectButton from "../ProjectButton/ProjectButton";

const ProjectNav = ({ changeFocus, active }) => {
  const projects = ["goggles", "story"];
  const descriptions = ["Expert Goggles", "StoryBored"];

  return (
    <div>
      {projects.map((project, i) => {
        return <ProjectButton key={project} changeFocus={changeFocus} active={active === project} value={project} name={descriptions[i]} />;
      })}
    </div>
  );
};

export default ProjectNav;
