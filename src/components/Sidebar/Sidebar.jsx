import React, { useState } from "react";
import "./sidebar.css";
import Slider from "../Slider/Slider";
import SidebarButton from "../SidebarButton/SidebarButton";

function Sidebar(props) {
  const [sliderValue, setSliderValue] = useState(50);

  function handleSortButton(value) {
    props.onSortButtonPress(value);
  }

  function handleResetButton() {
    props.onReset(sliderValue);
  }

  function handleSliderOnMouseUp(value) {
    props.onReset(value);
  }

  function handleSliderChange(value) {
    setSliderValue(value);
  }

  return (
    <div className="sidebar">
      <h1> Sorting Visualiser </h1>
      <p> Pick a sorting algorithm</p>
      <SidebarButton
        text="Insertion"
        action={handleSortButton}
        currentAlgorithm={props.currentAlgorithm}
      />
      <SidebarButton
        text="Bubble"
        action={handleSortButton}
        currentAlgorithm={props.currentAlgorithm}
      />
      <SidebarButton
        text="Quick"
        action={handleSortButton}
        currentAlgorithm={props.currentAlgorithm}
      />
      <SidebarButton
        text="Merge"
        action={handleSortButton}
        currentAlgorithm={props.currentAlgorithm}
        className="btn-last"
      />
      <SidebarButton
        text="Reset"
        action={handleResetButton}
        currentAlgorithm={props.currentAlgorithm}
      />
      <Slider
        value={sliderValue}
        currentAlgorithm={props.currentAlgorithm}
        onChange={handleSliderChange}
        onMouseUp={handleSliderOnMouseUp}
      />
    </div>
  );
}

export default Sidebar;
