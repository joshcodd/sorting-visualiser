import React, { useState } from "react";
import "./sidebar.css";
import SidebarButton from "../SidebarButton/SidebarButton";
import DropdownButton from "../DropdownButton/DropdownButton";

function Sidebar(props) {
  const [sliderValue, setSliderValue] = useState(50);
  const [algorithmSpeed, setSpeed] = useState(10);

  function handleSortButton(value) {
    props.onSortButtonPress(value);
  }

  function handleResetButton() {
    props.onReset(sliderValue);
  }

  function handleSizeSliderOnMouseUp(value) {
    props.onReset(value);
  }

  function handleSizeSliderChange(value) {
    setSliderValue(value);
  }

  function handleSpeedSliderChange(value) {
    setSpeed(value);
  }

  function handleSpeedSliderOnMouseUp(value) {
    props.onSpeedChange(value);
  }

  return (
    <div className="sidebar">
      <div className="title">
        <h1> Sorting Algorithm Visualiser </h1>{" "}
      </div>

      <label className="sidebarSectionTitle">ALGORITHMS</label>
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

      <label className="sidebarSectionTitle">COLLECTION</label>
      <SidebarButton
        text="Reset"
        action={handleResetButton}
        currentAlgorithm={props.currentAlgorithm}
      />

      <DropdownButton
        text="Speed"
        action={handleResetButton}
        handleSliderChange={handleSpeedSliderChange}
        handleSliderOnMouseUp={handleSpeedSliderOnMouseUp}
        currentAlgorithm={props.currentAlgorithm}
        sliderValue={algorithmSpeed}
        displayValueInOutput={false}
      />

      <DropdownButton
        text="Size"
        action={handleResetButton}
        handleSliderChange={handleSizeSliderChange}
        handleSliderOnMouseUp={handleSizeSliderOnMouseUp}
        currentAlgorithm={props.currentAlgorithm}
        sliderValue={sliderValue}
        displayValueInOutput={true}
      />
    </div>
  );
}

export default Sidebar;
