import React from "react";
import "./sidebar.css";

let sliderValue = 50;

function Sidebar(props) {
  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "merge":
        props.onMerge();
        break;

      case "bubble":
        props.onBubble();
        break;

      case "quick":
        props.onQuick();
        break;

      case "reset":
        console.log(sliderValue);
        props.onReset(sliderValue);
        break;

      default:
        break;
    }
  }

  function handleChange(event) {
    sliderValue = event.target.value;
    props.onReset(sliderValue);
  }

  return (
    <div className="sidebar">
      <h1> Sorting Visualiser </h1>
      <button className="btn" onClick={handleClick} value="merge">
        Merge
      </button>
      <button className="btn" id="btn" onClick={handleClick} value="bubble">
        Bubble
      </button>
      <button className="btn" onClick={handleClick} value="quick">
        Quick
      </button>
      <button className="btn" onClick={handleClick}>
        Insertion Sort
      </button>
      <button className="btn" onClick={handleClick} value="reset">
        reset array
      </button>

      <div className="sliderContainer">
        <input
          type="range"
          min="5"
          max="100"
          className="slider"
          id="myRange"
          onMouseUp={handleChange}
        />
        <output className="sliderOutput"> {sliderValue} </output>
      </div>
    </div>
  );
}

export default Sidebar;
