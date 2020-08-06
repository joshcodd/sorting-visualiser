import React from "react";
import "./sortingbar.css";
import "../Visualiser/visualiser.css";

function SortingBar(props) {
  const heightStyle = {
    height: props.height,
    marginLeft: props.margin,
    width: props.width,
  };

  return <div className="bar" style={heightStyle}></div>;
}

export default SortingBar;
