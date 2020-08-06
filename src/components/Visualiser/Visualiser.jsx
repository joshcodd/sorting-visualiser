import React, { useState } from "react";
import "./visualiser.css";
import SortingBar from "../SortingBar/SortingBar";

const numOfBars = 10;
const barsfirst = [];
for (let i = 0; i < numOfBars; i++) {
  const barSize = Math.floor(Math.random() * 500);
  barsfirst.push(barSize);
}
const barsWidth = 9000 / numOfBars;
const margin = 100 / numOfBars;

function Visualiser(props) {
  const [bars, setBars] = useState(barsfirst);

  // console.log(bars);
  function sort() {
    let newbars = [...bars];
    const n = bars.length;

    for (let i = 0; i < n - 1; i++)
      for (let j = 0; j < n - i - 1; j++)
        if (newbars[j] > newbars[j + 1]) {
          // swap arr[j+1] and arr[i]
          const temp = newbars[j];

          newbars[j] = newbars[j + 1];
          newbars[j + 1] = temp;
        }

    console.log(bars);
    setBars(() => {
      return newbars;
    });
    console.log(bars);
  }
  console.log(bars);

  return (
    <div className="visualiser">
      <button onClick={sort}>click</button>
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
