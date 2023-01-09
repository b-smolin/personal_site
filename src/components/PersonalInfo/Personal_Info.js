import React from "react";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import "./info.css";
import Me from "./smol-green-16bit.png";
import GitLogo from "./github-mark-white.png";
import LiLogo from "./In-Blue-Logo.png";

const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="info-box">
      <Popover
        isOpen={showInfo}
        positions={["bottom", "left"]}
        align={"middle"}
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
        positions={["bottom", "left"]}
        align={"end"}
        padding={20}
        reposition={true}
        onClickOutside={() => setShowLinks(false)}
        content={() => (
          <div className="popup">
            <a className="offsite-nav" href="https://github.com/b-smolin">
              <img src={GitLogo} alt="GitHub" /> GitHub
            </a>
            <a className="offsite-nav" href="https://www.linkedin.com/in/benjamin-smolin-06722a101/">
              <img src={LiLogo} alt="LinkedIn" /> LinkedIn
            </a>
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
      <img className="me-8bit" alt="" src={Me} width={"70px"} height={"70px"}></img>
    </div>
  );
};

export default PersonalInfo;
