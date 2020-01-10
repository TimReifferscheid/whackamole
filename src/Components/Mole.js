import React from "react";
import "./Mole.css";

const Mole = props => {
  if (props.isVisible === true) {
    return (
      <div
        className="Mole"
        onClick={props.clicked}
        style={{ backgroundColor: "red" }}></div>
    );
  } else {
    return <div className="Mole"></div>;
  }
};

export default Mole;
