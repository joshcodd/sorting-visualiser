import React from "react";
import "./sidebar.css";

function Sidebar() {
  function handleClick() {}

  return (
    <div className="sidebar">
      <h1> Sorting Visualiser </h1>
      <button onClick={handleClick}> Sort </button>
    </div>
  );
}

export default Sidebar;
