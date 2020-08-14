import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Visualizer from "../Visualizer/Visualizer";
import quickSort from "./sortingAlgorithms/quickSort";
import bubbleSort from "./sortingAlgorithms/bubbleSort";
import mergeSort from "./sortingAlgorithms/mergeSort";
import insertionSort from "./sortingAlgorithms/insertionSort";

function App() {
  let [bars, setBars] = useState([]);
  let [currentAlgorithm, setCurrentAlgorithm] = useState("");
  let [currentSpeed, setCurrentSpeed] = useState(10);

  function changeBarsClass(newClass) {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
      bars[i].className = newClass;
    }
  }

  //Generate and return array of random values (bar heights)
  function generateArray(numOfBars) {
    changeBarsClass("bar slowTransition");
    const barsArray = [];
    for (let i = 0; i < numOfBars; i++) {
      const randomBarSize = Math.floor(Math.random() * 700);
      barsArray.push(randomBarSize);
    }
    setBars(barsArray);
  }

  //Generate array on initially.
  useEffect(() => {
    generateArray(50);
    // eslint-disable-next-line
  }, []);

  //Set height to ensure all bars animate/transition on reset.
  useEffect(() => {
    const arrayBars = document.getElementsByClassName("bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.height = "350px";

      setTimeout(function () {
        arrayBars[i].style.height = `${bars[i]}px`;
      }, 0.1);
    }
  }, [bars]);

  //delay
  function pauseFor(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //Use correct sort and timeline parser, for sort selected.
  async function handleTimeline(searchType) {
    changeBarsClass("bar fastTransition");

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
          await pauseFor(currentSpeed);
          barOne.background = "";
          barTwo.background = "";
          await pauseFor(currentSpeed);
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
          barOne.background = "#ff2e63";
          barTwo.background = "#ff2e63";
          await pauseFor(currentSpeed);
          barOne.background = "";
          barTwo.background = "";
          await pauseFor(currentSpeed);
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
          await pauseFor(currentSpeed);
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
          await pauseFor(currentSpeed);
          barOne.background = "";
          await pauseFor(currentSpeed);
        }
        break;

      default:
        alert("There has been an error please refresh");
        break;
    }

    changeBarsClass("bar slowTransition colouredIn");
    setCurrentAlgorithm("");
    setBars(sortedArray);
  }

  return (
    <div>
      <Sidebar
        onReset={generateArray}
        onSortButtonPress={handleTimeline}
        currentAlgorithm={currentAlgorithm}
        onSpeedChange={setCurrentSpeed}
        algorithmSpeed={currentSpeed}
      />
      <Visualizer bars={bars} />
    </div>
  );
}

export default App;
