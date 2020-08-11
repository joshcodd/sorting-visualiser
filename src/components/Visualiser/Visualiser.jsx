import React from "react";
import "./visualiser.css";
import SortingBar from "../SortingBar/SortingBar";

function Visualiser(props) {
  const numOfBars = props.bars.length;
  const barsWidth = 9800 / numOfBars;
  const margin = 200 / numOfBars;

  return (
    <div className="visualiser">
      <div className="container">
        {props.bars.map((barHeight, index) => {
          return (
            <SortingBar
              key={index}
              height={barHeight}
              width={barsWidth}
              margin={margin}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Visualiser;
