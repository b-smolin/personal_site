import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./info.css";
import Me from "./smol-green-16bit.png";

// const PersonalInfo = () => {
//   return (
//     <div class="info-box">
//       <h1>Howdy! I'm Ben Smolin</h1>
//       <img src={Selfie}></img>
//       <p>
//         I received a B.S. in Computer Science from Temple University in December 2022 and am currently seeking software development opportunities.
//       </p>
//       <p>Some of my biggest interests are back-end development, machine learning, FOSS, and visualizations</p>
//       <p>Outside of the world of computers, I like aquariums and fishkeeping, cycling, and movies</p>
//       <div>
//         <button
//           class="offsite-nav"
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             window.location.href = "https://www.linkedin.com/in/benjamin-smolin-06722a101/";
//           }}
//         >
//           <img src={LILogo}></img>
//           LinkedIn
//         </button>
//         <button
//           class="offsite-nav"
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             window.location.href = "https://github.com/b-smolin";
//           }}
//         >
//           <img src={GitLogo}></img>
//           GitHub
//         </button>
//         <h2>Projects</h2>
//         <div>
//           <button class="project-toggle" type="button">
//             LinkedIn
//           </button>
//           <button class="project-toggle" type="button">
//             GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="info-box">
      <img className="me-8bit" src={Me} width={"70px"} height={"70px"}></img>
      <button onClick={() => setShowInfo(!showInfo)}>About Me</button> / <button onClick={() => setShowLinks(!showLinks)}>Contact Me</button>
    </div>
  );
};

export default PersonalInfo;
