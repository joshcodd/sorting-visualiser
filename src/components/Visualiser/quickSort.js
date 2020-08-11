//Referenced: https://www.geeksforgeeks.org/quick-sort/
//Function(s) to take in an array and return :
// - A timeLine, I.E an array of 3 values. 1: pivot, 2: index of bar and 3: bar height to set.
// - The sorted array
const timeLine = [];

//Function to call the recursive quickSortMain and return the needed values to the app component.
export default function quickSort(array) {
  const sortingArray = [...array];

  quickSortMain(sortingArray, 0, sortingArray.length - 1);
  return { timeLine: timeLine, bars: sortingArray };
}

//Recursive quicksort function, selects pivot and quicksorts either side of pivot.
function quickSortMain(sortingArray, low, high) {
  if (low < high) {
    let pivot = partition(sortingArray, low, high);
    let leftHigh = pivot - 1;
    let rightLow = pivot + 1;

    quickSortMain(sortingArray, low, leftHigh);
    quickSortMain(sortingArray, rightLow, high);
  }
}

//Places pivot at last index of array section and then moves all elements > to the right of it,
// and all elements < to the left of it.
function partition(sortingArray, low, high) {
  let pivot = high;
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (sortingArray[j] < sortingArray[pivot]) {
      i++;
      //swap and push elements to swap, to the timeLine.
      timeLine.push([pivot, j, sortingArray[i]]);
      timeLine.push([pivot, i, sortingArray[j]]);
      swap(sortingArray, i, j);
    }
  }

  //Move pivot to correct position
  timeLine.push([pivot, i + 1, sortingArray[pivot]]);
  timeLine.push([pivot, pivot, sortingArray[i + 1]]);
  swap(sortingArray, i + 1, high);
  pivot = i + 1;

  return pivot;
}

//Function that takes an array, and two index. Elements at index are swapped over.
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
