import React from "react";

const ProjectButton = ({ key, active, value, changeFocus, name }) => {
  const handleClick = () => {
    changeFocus(value);
  };
  return (
    <button className="project-button" key={key} active={active} value={value} onClick={handleClick}>
      {name}
    </button>
  );
};

export default ProjectButton;
