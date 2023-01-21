import React from "react";

const Badges = ({ topics }) => {
  return (
    <div className="badge-div">
      {topics.map((topic) => {
        return (
          <div>
            <span style={{ color: "orange", fontWeight: "bolder" }}>*</span> {topic}
          </div>
        );
      })}
    </div>
  );
};

export default Badges;
