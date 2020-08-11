//Function to take in an array and return :
// - A timeLine, I.E an array of pairs where the two values are the index of bars to be swapped in
//   order to visualise a bubble sort step by step.
// - The sorted array
const timeLine = [];
export default function bubbleSort(array) {
  timeLine.length = 0; //clear array
  const sortingArray = [...array];
  for (let i = 0; i < sortingArray.length; i++) {
    for (let j = 0; j < sortingArray.length; j++) {
      // If value after current is greater, swap values and add swap to timeLine.
      if (sortingArray[j] >= sortingArray[j + 1]) {
        timeLine.push([j, j + 1, sortingArray[j], sortingArray[j + 1]]);
        swap(sortingArray, j, j + 1);
      }
    }
  }
  return { timeLine: timeLine, bars: sortingArray };
}

//Function that takes an array, and two index. Elements at index are swapped over.
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
