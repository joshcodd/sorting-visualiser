import React from "react";
import "./slider.css";

function Slider(props) {
  let value = props.value;

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  function handleOnMouseUp(event) {
    props.onMouseUp(event.target.value);
  }

  return (
    <input
      type="range"
      min="5"
      max="100"
      className={"slider slider" + props.sliderType}
      id="myRange"
      onChange={props.currentAlgorithm === "" ? handleChange : null}
      onMouseUp={props.currentAlgorithm === "" ? handleOnMouseUp : null}
      value={value}
    />
  );
}

export default Slider;
