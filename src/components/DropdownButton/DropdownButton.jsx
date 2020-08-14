import React, { useState } from "react";
import "./dropdownbutton.css";
import Slider from "../Slider/Slider";
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
    setIsDown(currentIsDown);
  }

  return (
    <div className="dropdown">
      <SidebarButton
        className={
          (isDown ? "sidebarButton sidebarButtonActive " : "sidebarButton ") +
          props.className
        }
        text={props.text}
        action={handleDrop}
        currentAlgorithm={""}
      />

      <ul
        className="dropdownList"
        style={isDown ? { background: "visible" } : { display: "none" }}
      >
        <div className="popTagTriangle"></div>
        <li className="dropDownItem">
          {props.text === "Speed" && <label className="right">Fast</label>}
          <Slider
            value={props.sliderValue}
            currentAlgorithm={props.currentAlgorithm}
            onChange={props.handleSliderChange}
            onMouseUp={props.handleSliderOnMouseUp}
            sliderType={props.text}
          />
          {props.text === "Speed" && <label className="right">Slow</label>}
        </li>
        {props.displayValueInOutput && (
          <div className="sliderOutput">{props.sliderValue}</div>
        )}
      </ul>
    </div>
  );
}

export default DropdownButton;
