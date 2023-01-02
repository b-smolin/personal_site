import React from "react";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import "bootstrap/dist/css/bootstrap.css";
import "./info.css";
import Me from "./smol-green-16bit.png";

const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="info-box">
      <img className="me-8bit" alt="" src={Me} width={"70px"} height={"70px"}></img>
      <Popover
        isOpen={showInfo}
        positions={["bottom", "right"]}
        align={"start"}
        padding={20}
        reposition={false}
        onClickOutside={() => setShowInfo(false)}
        content={() => (
          <div className="popup">
            I'm Ben Smolin, I just received my B.S in Computer Science and am looking for Software Engineering opportunities. I'm interested in
            software development, FOSS, back-end development, machine learning and visualizations. Outside of computers I like fishkeeping, cycling
            and movies.
          </div>
        )}
      >
        <button
          className="header-link"
          onClick={(e) => {
            setShowInfo(!showInfo);
          }}
        >
          About Me
        </button>
      </Popover>{" "}
      /{" "}
      <Popover
        isOpen={showLinks}
        positions={["bottom", "right"]}
        align={"start"}
        padding={20}
        reposition={true}
        onClickOutside={() => setShowLinks(false)}
        content={() => (
          <div className="popup">
            <p>stuff about my websites here</p>
          </div>
        )}
      >
        <button
          className="header-link"
          onClick={(e) => {
            setShowLinks(!showLinks);
          }}
        >
          Contact Me
        </button>
      </Popover>
    </div>
  );
};

export default PersonalInfo;
