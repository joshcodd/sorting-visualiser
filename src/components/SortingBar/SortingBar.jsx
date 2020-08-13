import React from "react";
import "./sortingbar.css";
import "../Visualiser/visualiser.css";

function SortingBar(props) {
  const heightStyle = {
    marginLeft: props.margin,
    width: props.width,
    height: props.height,
  };
  return <div className="bar-trans" style={heightStyle}></div>;
}

export default SortingBar;
