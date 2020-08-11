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
      <label className="sliderTitle">Collection Size</label>
      <input
        type="range"
        min="5"
        max="100"
        className="slider"
        id="myRange"
        onChange={handleChange}
        onMouseUp={handleOnMouseUp}
        value={value}
      />
      <output className="sliderOutput"> {value} </output>
    </div>
  );
}

export default Slider;
