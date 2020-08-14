import React from "react";
import "./sortingbar.css";
import "../Visualiser/visualiser.css";

function SortingBar(props) {
  const heightStyle = {
    marginLeft: props.margin,
    width: props.width,
    height: props.height,
  };
  return <div className="bar slowTransition" style={heightStyle}></div>;
}

export default SortingBar;
