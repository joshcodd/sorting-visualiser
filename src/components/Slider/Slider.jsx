import React from "react";

function Slider(props) {
  let value = props.value;

  function handleChange(event) {
    props.onChange(event.target.value);
  }

  function handleOnMouseUp(event) {
    props.onMouseUp(event.target.value);
  }

  return (
    <div className="sliderContainer">
      <input
        type="range"
        min="5"
        max="100"
        className="slider"
        id="myRange"
        onChange={props.currentAlgorithm === "" ? handleChange : null}
        onMouseUp={props.currentAlgorithm === "" ? handleOnMouseUp : null}
        value={value}
      />
    </div>
  );
}

export default Slider;
