import React, { useState } from "react";
import "./visualiser.css";
import SortingBar from "../SortingBar/SortingBar";

function Visualiser() {
  // const [bars, setBars] = useState([]);

  // const numOfBars = 100;
  // for (let i = 0; i < numOfBars; i++) {
  //   const barSize = Math.floor(Math.random() * 500);
  //   bars.push(barSize);
  // }
  // const barsWidth = 9000 / numOfBars;
  // const margin = 100 / numOfBars;

  // function sort() {
  //   const n = bars.length;
  //   for (const i = 0; i < n - 1; i++)
  //     for (const j = 0; j < n - i - 1; j++)
  //       if (bars[j] > bars[j + 1]) {
  //         // swap arr[j+1] and arr[i]
  //         const temp = bars[j];

  //         setBars((prevValues) => {
  //           bars[j] = bars[j + 1];
  //           bars[j + 1] = temp;
  //         });
  //       }
  // }

  return (
    <div className="visualiser">
      <div className="container">
        {bars.map((barHeight, index) => {
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
