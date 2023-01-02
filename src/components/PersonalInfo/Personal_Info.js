import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./info.css";
import Me from "./smol-green-16bit.png";
const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="info-box">
      <img className="me-8bit" alt="" src={Me} width={"70px"} height={"70px"}></img>
      <button
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          setShowInfo(!showInfo);
        }}
      >
        About Me
      </button>{" "}
      /{" "}
      <button
        className="header-link"
        onClick={(e) => {
          e.preventDefault();
          setShowLinks(!showLinks);
        }}
      >
        Contact Me
      </button>
    </div>
  );
};

export default PersonalInfo;
