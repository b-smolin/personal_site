import React from "react";

const ProjectButton = ({ key, active, value, changeFocus, name }) => {
  const handleClick = () => {
    changeFocus(value);
  };
  return (
    <button className={active ? "active-button" : "inactive-button"} key={key} active={active} value={value} onClick={handleClick}>
      {name}
      {active ? "<" : ""}
    </button>
  );
};

export default ProjectButton;
