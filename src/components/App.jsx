import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Visualiser from "./Visualiser/Visualiser";
import quickSort from "./Visualiser/quickSort";
import bubbleSort from "./Visualiser/bubbleSort";
import mergeSort from "./Visualiser/mergeSort";
import insertionSort from "./Visualiser/insertionSort";

function App() {
  let [bars, setBars] = useState([]);
  let [currentAlgorithm, setCurrentAlgorithm] = useState("");

  //Generate and return array of random values (bar heights)
  function generateArray(numOfBars) {
    const arrayBars = document.getElementsByClassName("bar-trans");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.background = "";
    }

    const barsArray = [];
    for (let i = 0; i < numOfBars; i++) {
      const randomBarSize = Math.floor(Math.random() * 700);
      barsArray.push(randomBarSize);
    }
    setBars(barsArray);
  }

  //Generate array on load.
  useEffect(() => {
    generateArray(50);
  }, []);

  //fix bug
  useEffect(() => {
    const arrayBars = document.getElementsByClassName("bar-trans");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.height = "250px";

      setTimeout(function () {
        arrayBars[i].style.height = bars[i] + "px";
      }, 0.1);
    }
  }, [bars]);

  //delay
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleTimeline(searchType) {
    //Remove transition class from classname.
    const barsChangeTransition = document.getElementsByClassName("bar-trans");
    while (barsChangeTransition.length > 0) {
      barsChangeTransition[0].className = "bar";
    }

    setCurrentAlgorithm(searchType);
    let timeLine = [];
    let sortedArray = [];
    const arrayBars = document.getElementsByClassName("bar");

    switch (searchType) {
      case "Merge":
        const mergeResult = mergeSort(bars);
        timeLine = mergeResult.timeLine;
        sortedArray = mergeResult.bars;

        for (let i = 0; i < timeLine.length; i++) {
          const [barOneIndex, barTwoIndex, newHeight] = timeLine[i];
          const barOne = arrayBars[barOneIndex].style;
          const barTwo = arrayBars[barTwoIndex].style;
          barOne.height = `${newHeight}px`;
          barOne.background = "#ff2e63";
          barTwo.background = "#ff2e63";
          await wait(10);
          barOne.background = "";
          barTwo.background = "";
          await wait(10);
        }
        break;

      case "Bubble":
        const bubbleResult = bubbleSort(bars);
        timeLine = bubbleResult.timeLine;
        sortedArray = bubbleResult.bars;

        for (let i = 0; i < timeLine.length; i++) {
          const [barOneIndex, barTwoIndex, heightOne, HeightTwo] = timeLine[i];
          const barOne = arrayBars[barOneIndex].style;
          const barTwo = arrayBars[barTwoIndex].style;
          barOne.height = `${HeightTwo}px`;
          barTwo.height = `${heightOne}px`;
          barOne.background = "##ff2e63";
          barTwo.background = "##ff2e63";
          await wait(10);
          barOne.background = "";
          barTwo.background = "";
          await wait(10);
        }
        break;

      case "Quick":
        const quickResult = quickSort(bars);
        timeLine = quickResult.timeLine;
        sortedArray = quickResult.bars;

        for (let i = 0; i < timeLine.length; i++) {
          const [pivotIndex, barIndex, barHeight] = timeLine[i];
          const barOne = arrayBars[barIndex].style;
          const pivot = arrayBars[pivotIndex].style;
          barOne.height = `${barHeight}px`;
          barOne.background = "##ff2e63";
          pivot.background = "#1b1b2f";
          await wait(10);
          barOne.background = "";
          pivot.background = "";
        }
        break;

      case "Insertion":
        const insertionResult = insertionSort(bars);
        timeLine = insertionResult.timeLine;
        sortedArray = insertionResult.bars;

        for (let i = 0; i < timeLine.length; i++) {
          const [barIndex, barHeight] = timeLine[i];
          const barOne = arrayBars[barIndex].style;
          barOne.height = `${barHeight}px`;
          barOne.background = "#ff2e63";
          await wait(10);
          barOne.background = "";
          await wait(10);
        }
        break;

      default:
        alert("There has been an error please refresh");
        break;
    }

    //Add transition class for array reset animations.
    const arrayBarsClass = document.getElementsByClassName("bar");
    while (arrayBarsClass.length > 0) {
      arrayBars[0].className = "bar-trans";
    }

    const arrayBarsColor = document.getElementsByClassName("bar-trans");
    for (let i = arrayBarsColor.length - 1; i >= 0; i--) {
      await wait(10);
      // arrayBarsColor[i].style.opacity = "0.7";
      console.log(arrayBarsColor[i].style.background);
      arrayBarsColor[i].style.background = "rgba(255, 255, 255, 0.253)";
      console.log(arrayBarsColor[i].style.background);
    }

    setCurrentAlgorithm("");
    setBars(sortedArray);
  }

  return (
    <div>
      <Sidebar
        onReset={generateArray}
        onSortButtonPress={handleTimeline}
        currentAlgorithm={currentAlgorithm}
      />
      <Visualiser bars={bars} />
    </div>
  );
}

export default App;
