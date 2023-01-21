import React from "react";

const Promocard = ({ name, title, info }) => {
  return (
    <div>
      <span style={{ fontSize: "1.2em", fontWeight: "Bolder" }}>
        {name} - {title}
      </span>
      <p>{info}</p>
    </div>
  );
};

export default Promocard;
