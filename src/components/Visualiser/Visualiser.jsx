import React from "react";
import "./visualiser.css";
import SortingBar from "../SortingBar/SortingBar";

function Visualiser(props) {
  const numOfBars = props.numbars;
  const barsWidth = 9700 / numOfBars;
  const margin = 300 / numOfBars;

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
