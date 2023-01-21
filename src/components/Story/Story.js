import React from "react";
import StoryHighlight from "./tempstory.jpg";
import Badges from "../badge/Badge";

const Story = () => {
  const badges = ["React.js", "Node.js", "Networking", "Agile Development"];
  return (
    <div className="article">
      <div>
        Real-time, collaborative storyboarding software
        <h1>StoryPages</h1>
      </div>
      <Badges topics={badges} />
      <div>
        <img className="picture-box" src={StoryHighlight} alt="storybored canvas example"></img>
      </div>
      <div>
        <a className="header-link" href="https://github.com/b-smolin/story_pages" target="_blank" rel="noreferrer">
          PROJECT_GITHUB ↗
        </a>
        {" ─ "}
        <a className="header-link" href="http://45.79.174.22:3000/" target="_blank" rel="noreferrer">
          LIVE_DEMO ↗
        </a>
      </div>
      <p>
        StoryPages is a fork of StoryBored, my project for the final class in the Computer Science program at Temple. It is a collaborative
        storyboarding application built with React and a node.js backend. It allows users to work in different rooms to draw on canvasses in
        real-time. Users can see what other users in their room draw and interact with their objects as well. The program supports freeform shapes,
        preset shapes, and text. Users can draw on up to three different frames and can see a small preview of the other frames as they are edited as
        well. Most of my code contributions revolved around canvas synchronization, socket communication, and drawing tools, but I had at least small
        contributions in almost every area.
      </p>
      <div>
        <h5>Cool Things:</h5>
        <ul>
          <li>
            I served as Project Leader for this project and was responsible for planning the sprints based on previous velocity and project planning
            in the form of research and UML documents
          </li>
          <li>
            It works pretty well for a school project! You can see people drawing and moving shapes in real-time so long as you have a stable internet
            connection.
          </li>
          <li>
            This was my first time using pretty much all of this technology. I'm proud of the features we were able to implement with how little
            experience we had
          </li>
        </ul>
      </div>
      <div>
        <h5>Frustrating Things:</h5>
        <ul>
          <li>
            We originally chose to use WebRTC to transfer messages but this caused issues on Temple's network due to it creating a peer-to-peer
            connection. We had to rewrite our canvas synchronization code entirely about a third of the way through the project.
          </li>
          <li>
            This was my first React project. There were definitely some growing pains and due to not knowing how things like useEffect and useState
            really work. I'm sure anyone with a few years experience would find a lot of flaws in the design (and I see some as well)!
          </li>
          <li>
            We never came up with a good way to handle different screen sizes. It looks decent on average screen sizes but isn't responsive and looks
            bad on many devices.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Story;
