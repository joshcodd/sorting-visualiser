import React from "react";
import "./sortingbar.css";
import "../Visualiser/visualiser.css";

function SortingBar(props) {
  const heightStyle = {
    height: props.height,
    marginLeft: props.margin,
    width: props.width,
    //background: "linear-gradient(0.4turn, #64ffda, #64ff8d)",
  };

  return <div className="bar" style={heightStyle}></div>;
}

export default SortingBar;
