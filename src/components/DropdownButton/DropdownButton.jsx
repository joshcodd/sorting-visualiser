import Slider from "../Slider/Slider";
import React, { useState } from "react";
import SidebarButton from "../SidebarButton/SidebarButton";

function DropdownButton(props) {
  const [isDown, setIsDown] = useState(false);

  function handleDrop() {
    let currentIsDown = "";
    if (isDown === true) {
      currentIsDown = false;
    } else if (isDown === false) {
      currentIsDown = true;
    }

    console.log(currentIsDown);
    setIsDown(currentIsDown);
  }

  return (
    <div className="dropdown">
      <SidebarButton
        className={(isDown ? "btn btn-active " : "btn ") + props.className}
        text={props.text}
        action={handleDrop}
        currentAlgorithm={""}
      />

      <ul style={isDown ? { background: "visible" } : { display: "none" }}>
        <li>
          <div className="triangle"></div>

          <Slider
            value={props.sliderValue}
            currentAlgorithm={props.currentAlgorithm}
            onChange={props.handleSliderChange}
            onMouseUp={props.handleSliderOnMouseUp}
            sliderType={props.text}
          />

          {props.displayValueInOutput && (
            <div className="sliderOutput">{props.sliderValue}</div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DropdownButton;
