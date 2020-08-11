import React from "react";

function SidebarButton(props) {
  return (
    <button
      className={"btn " + props.className}
      onClick={props.action}
      value={props.text}
    >
      {props.text}
    </button>
  );
}

export default SidebarButton;
