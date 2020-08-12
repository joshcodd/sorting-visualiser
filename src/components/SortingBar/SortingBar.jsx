import React from "react";
import "./sortingbar.css";
import "../Visualiser/visualiser.css";

function SortingBar(props) {
  const heightStyle = {
    marginLeft: props.margin,
    width: props.width,
    height: props.height,

    //background: "linear-gradient(0.4turn, #64ffda, #64ff8d)",
  };

  return <div className="bar-trans" style={heightStyle}></div>;
}

export default SortingBar;
