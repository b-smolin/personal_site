import React from "react";
import StoryHighlight from "./tempstory.jpg";
import "./story.css";

const Story = () => {
  return (
    <div className="story-info">
      <h1>StoryBored</h1>
      <h2>A web application that allows users to collaborate in real-time on storyboard projects</h2>
      <div className="demo-container"></div>
      <img src={StoryHighlight} alt="pciture of the storybored project"></img>
      <div>
        <a className="header-link" href="https://github.com/b-smolin/story_pages">
          Project GitHub
        </a>
      </div>
      <h5>What went well:</h5>
      <ul>
        <li>It works pretty well! You can see people drawing and moving shapes in real-time so long as you have a stable internet connection.</li>
      </ul>
      <h5>What was frustrating:</h5>
      <ul>
        <li>
          We originally chose to use WebRTC to transfer messages but this caused issues on Temple's network due to it creating a peer-to-peer
          connection. We had to rewrite our canvas synchronization code entirely about a third of the way through the project.
        </li>
        <li>This was my first React project. There were definitely some growing pains and due to </li>
      </ul>
    </div>
  );
};

export default Story;
