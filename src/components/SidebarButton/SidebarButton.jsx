import React from "react";

function SidebarButton(props) {
  let currentAlgorithm = props.currentAlgorithm;

  function handleClick(event) {
    if (currentAlgorithm === "") {
      props.action(event.target.value);
    }
  }

  return (
    <button
      className={
        (currentAlgorithm === props.text ? "btn btn-active " : "btn ") +
        props.className
      }
      onClick={handleClick}
      value={props.text}
    >
      {props.text}
    </button>
  );
}

export default SidebarButton;
