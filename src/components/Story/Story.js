import React from "react";
import StoryHighlight from "./tempstory.jpg";
import "./story.css";

const Story = () => {
  return (
    <div className="story-info">
      <h1>StoryPages</h1>
      <h2>A web application that allows users to collaborate in real-time on storyboard projects</h2>
      <div className="demo-container"></div>
      <div>
        <a className="header-link" href="https://github.com/b-smolin/story_pages">
          Project GitHub
        </a>
      </div>
      <img src={StoryHighlight} alt="pciture of the storybored project"></img>
      <div className="story-body">
        <p>
          StoryPages is a fork of StoryBored, my project for the final class in the Computer Science program at Temple. It is a collaborative
          storyboarding application built with React and a node.js backend. It allows users to work in different rooms to draw on canvasses in
          real-time. Users can see what other users in their room draw and interact with their objects as well. The program supports freeform shapes,
          preset shapes, and text. Users can draw on up to three different frames and can see a small preview of the other frames as they are edited
          as well.
        </p>
        <h5>What went well:</h5>
        <ul>
          <li>
            I served as Project Leader for this project and was responsible for planning the sprints based on previous velocity and project planning
            in the form of research and UML documents
          </li>
          <li>It works pretty well! You can see people drawing and moving shapes in real-time so long as you have a stable internet connection.</li>
          <li>
            This was my first time using pretty much all of this technology. I'm proud of the features we were able to implement with how little
            experience we had
          </li>
        </ul>
        <h5>What was frustrating:</h5>
        <ul>
          <li>
            We originally chose to use WebRTC to transfer messages but this caused issues on Temple's network due to it creating a peer-to-peer
            connection. We had to rewrite our canvas synchronization code entirely about a third of the way through the project.
          </li>
          <li>
            This was my first React project. There were definitely some growing pains and due to not knowing how things like useEffect and useState
            really work. I'm sure anyone with a few years experience would find a lot of flaws in the design (and I see some as well)!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Story;
