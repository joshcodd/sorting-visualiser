import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Visualiser from "./Visualiser/Visualiser";

function App() {
  // const bars1 = [];
  // const numOfBars = 10;
  // for (let i = 0; i < numOfBars; i++) {
  //   const barSize = Math.floor(Math.random() * 500);
  //   bars1.push(barSize);
  // }
  // const barsWidth = 9000 / numOfBars;
  // const margin = 100 / numOfBars;

  // const [bars, setBars] = useState(bars1);

  // function sort() {
  //   const n = bars.length;
  //   for (let i = 0; i < n - 1; i++)
  //     for (let j = 0; j < n - i - 1; j++)
  //       if (bars[j] > bars[j + 1]) {
  //         // swap arr[j+1] and arr[i]
  //         const temp = bars[j];

  //         setBars((prevValues) => {
  //           bars[j] = bars[j + 1];
  //           bars[j + 1] = temp;
  //           console.log(bars);
  //           return bars;
  //         });
  //       }
  // }

  return (
    <div>
      {/* <Sidebar buttonPress={sort} /> */}
      <Sidebar />
      <Visualiser />
      {/* <Visualiser bars={bars} barsWidth={barsWidth} margin={margin} /> */}
    </div>
  );
}

export default App;
