//Function to take in an array and return :
// - A timeLine, I.E an array of pairs where the two values are the index of bars to be swapped in
//   order to visualise a insertion sort step by step.
// - The sorted array
let timeLine = [];
export default function insertionSort(array) {
  timeLine.length = 0; //clear array
  let sortingArray = [...array];
  for (let i = 1; i < sortingArray.length; i++) {
    let key = sortingArray[i];
    let j = i - 1;

    while (j >= 0 && sortingArray[j] > key) {
      sortingArray[j + 1] = sortingArray[j];
      timeLine.push([j + 1, sortingArray[j]]);
      j = j - 1;
    }
    sortingArray[j + 1] = key;
    timeLine.push([j + 1, key]);
  }
  return { timeLine: timeLine, bars: sortingArray };
}
