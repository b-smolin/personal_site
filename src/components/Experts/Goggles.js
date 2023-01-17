import React from "react";

const Goggles = () => {
  return (
    <div className="article">
      <div>
        Creating learning opportunities from everyday experiences with machine learning
        <h1>Expert Goggles</h1>
      </div>
      {/*badges machine learning - web development - chrome extension - UI/HCI*/}
      <div>
        <a className="header-link" href="https://stevemacn.github.io/portfolio-expert-goggles/" target="_blank" rel="noreferrer">
          $RESEARCH_HOMEPAGE ↗
        </a>
        {" ┄ "}
        <a className="header-link" href="https://dl.acm.org/doi/abs/10.1145/3526114.3558627" target="_blank" rel="noreferrer">
          $UIST_2022_PUBLICATION ↗
        </a>
        {" ┄ "}
        <a
          className="header-link"
          href="https://github.com/Civic-Interactions-Lab/Expert-Goggles/tree/KNNClassifier"
          target="_blank"
          rel="noreferrer"
        >
          $PROJECT_GITHUB ↗
        </a>
      </div>
      <div className="video-responsive">
        <iframe src="https://www.youtube.com/embed/e0zKAgUssOI" frameBorder="0" allowFullScreen title="Embedded youtube" />
      </div>
      <p>
        I was fortunate to be able to join Dr. Stephen MacNeil and the Temple HCI Lab to work on the Expert Goggles project, a Chrome extension that
        uses Machine Learning to classify data visualizations and present users with information on how to analyze and interpret them. I was able to
        assist the team by training the KNN algorithm and adjusting its weights, reviewing and presenting relevant research papers, designing
        experiment plans and study designs, writing and editing papers for publication, and collaborating with other teams to improve our work and
        process. I'm proud of what we were able to accomplish. It was a great experience working at the intersection of computer science and design to
        improve my risk mitigation and design argumentation skills.
      </p>
      <div>
        <h5>Cool things: </h5>
        <ul>
          <li>
            Training our KNN model and iterating on weights until we achieved an accuracy comparable to complex neural network models. It was good
            enough to publish!
          </li>
          <li>Getting to work with and learn from ungrads, graduate students, and professors working in different disciplines</li>
          <li>Working on a challening problem with the ultimate goal of using computers to help people learn</li>
        </ul>
      </div>
      <div>
        <h5>Frustrating things: </h5>
        <ul>
          <li>
            We discovered a couple of papers that were published covering topics very similar to ours shortly after our demo paper was accepted at
            UIST 2022. This was discouraging as it decreased our odds of publishing a paper, but our team was able to find a path forward by reviewing
            the existing literature and changing the way we present information to the user.
          </li>
          <li>
            Sometimes I just wanted to code something but it wasn't appropriate at the time. We had to carefully plan and iterate on program and study
            designs to make the best use of our limited time, but it could be hard to mock up a design and not try to create it.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Goggles;
