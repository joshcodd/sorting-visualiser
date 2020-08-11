import React, { useState } from "react";
import "./sidebar.css";
import Slider from "../Slider/Slider";
import SidebarButton from "../SidebarButton/SidebarButton";

function Sidebar(props) {
  const [sliderValue, setSliderValue] = useState(50);

  function handleSortButton(event) {
    const value = event.target.value;

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
        action={props.currentAlgorithm === "" ? handleSortButton : null}
      />
      <SidebarButton
        text="Bubble"
        action={props.currentAlgorithm === "" ? handleSortButton : null}
      />
      <SidebarButton
        text="Quick"
        action={props.currentAlgorithm === "" ? handleSortButton : null}
      />
      <SidebarButton
        text="Merge"
        action={props.currentAlgorithm === "" ? handleSortButton : null}
        className="btn-last"
      />
      <SidebarButton
        text="Reset"
        action={props.currentAlgorithm === "" ? handleResetButton : null}
      />
      <Slider
        value={sliderValue}
        onChange={props.currentAlgorithm === "" ? handleSliderChange : null}
        onMouseUp={props.currentAlgorithm === "" ? handleSliderOnMouseUp : null}
      />
    </div>
  );
}

export default Sidebar;
