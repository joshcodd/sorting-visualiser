import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Visualiser from "./Visualiser/Visualiser";
import quickSort from "./Visualiser/quickSort";
import bubbleSort from "./Visualiser/bubbleSort";
import mergeSort from "./Visualiser/mergeSort";

function App() {
  let [bars, setBars] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(50);

  //Generate and return array of random values (bar heights)
  function generateArray(numOfBars) {
    const barsArray = [];
    for (let i = 0; i < numOfBars; i++) {
      const barSize = Math.floor(Math.random() * 500);
      barsArray.push(barSize);
    }
    setBars(barsArray);
  }

  //Generate array on load when bars = []
  useEffect(() => {
    generateArray(numberOfBars);
  }, []);

  function handleSlider(val) {
    setNumberOfBars(val);
  }

  // //Handle the different sort button clicks
  function handleBubbleSortClick() {
    const bubbleResult = bubbleSort(bars);
    handleTimeline(bubbleResult, "bubble");
  }

  function handleMergeSortClick() {
    const mergeResult = mergeSort(bars);
    handleTimeline(mergeResult, "merge");
  }

  function handleQuickSortClick() {
    const quickResult = quickSort(bars);
    handleTimeline(quickResult, "quick");
  }

  async function handleTimeline(sortingResult, sort) {
    const timeLine = sortingResult.timeLine;
    const sortedArray = sortingResult.bars;
    const arrayBars = document.getElementsByClassName("bar");

    //delay
    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    switch (sort) {
      case "merge":
        for (let i = 0; i < timeLine.length; i++) {
          const [barOneIndex, barTwoIndex, newHeight] = timeLine[i];
          const barOne = arrayBars[barOneIndex].style;
          const barTwo = arrayBars[barTwoIndex].style;

          barOne.height = `${newHeight}px`;

          barOne.background = "red";
          barTwo.background = "red";

          await wait(10);

          barOne.background = "";
          barTwo.background = "";
        }
        break;

      case "bubble":
        for (let i = 0; i < timeLine.length; i++) {
          const [barOneIndex, barTwoIndex, heightOne, HeightTwo] = timeLine[i];
          const barOne = arrayBars[barOneIndex].style;
          const barTwo = arrayBars[barTwoIndex].style;

          barOne.height = `${HeightTwo}px`;
          barTwo.height = `${heightOne}px`;

          barOne.background = "red";
          barTwo.background = "red";

          await wait(10);

          barOne.background = "";
          barTwo.background = "";
        }
        break;

      case "quick":
        for (let i = 0; i < timeLine.length; i++) {
          const [pivotIndex, barIndex, barHeight] = timeLine[i];
          const barOne = arrayBars[barIndex].style;
          const pivot = arrayBars[pivotIndex].style;

          barOne.height = `${barHeight}px`;
          barOne.background = "red";
          pivot.background = "yellow";

          await wait(30);

          barOne.background = "";
          pivot.background = "";
        }
        break;

      default:
        alert("There has been an error please refresh");
        break;
    }
    setBars(sortedArray);
  }

  return (
    <div>
      <Sidebar
        onMerge={handleMergeSortClick}
        onBubble={handleBubbleSortClick}
        onQuick={handleQuickSortClick}
        onReset={generateArray}
        onSlider={handleSlider}
      />
      <Visualiser bars={bars} numbars={numberOfBars} />
    </div>
  );
}

export default App;
