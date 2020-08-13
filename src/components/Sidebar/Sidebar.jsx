import React, { useState } from "react";
import "./sidebar.css";
import SidebarButton from "../SidebarButton/SidebarButton";
import DropdownButton from "../DropdownButton/DropdownButton";

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
      <h1> Sorting Algorithm Visualiser </h1>

      <label>ALGORITHMS</label>
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

      <label>COLLECTION</label>
      <SidebarButton
        text="Reset"
        action={handleResetButton}
        currentAlgorithm={props.currentAlgorithm}
      />

      <DropdownButton
        text="Size"
        action={handleResetButton}
        handleSliderChange={handleSliderChange}
        handleSliderOnMouseUp={handleSliderOnMouseUp}
        currentAlgorithm={props.currentAlgorithm}
        sliderValue={sliderValue}
      />
    </div>
  );
}

export default Sidebar;
