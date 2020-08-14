//Function(s) to take in an array and return :
// - A timeLine, I.E an array of 3 values. 1: pivot, 2: index of bar and 3: bar height to set.
// - The sorted array
const timeLine = [];

//Function to call the recursive mergesortMain and return the needed values to the app component.
export default function mergeSort(array) {
  timeLine.length = 0; //clear array
  const sortingArray = [...array];

  mergeSortMain(sortingArray);
  return { timeLine: timeLine, bars: sortingArray };
}

//Main merge sort function, recursively splits array into smaller sections, then merges together.
function mergeSortMain(sortingArray, low = 0, high = sortingArray.length - 1) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSortMain(sortingArray, low, mid);
    mergeSortMain(sortingArray, mid + 1, high);
    merge(sortingArray, low, high);
  }
}

//Merge split arrays back together
function merge(sortingArray, low, high) {
  let tempArray = [];
  //i left index, j right index
  let i = low;
  let k = low;

  let mid = Math.floor((low + high) / 2);
  let j = mid + 1;

  while (i <= mid && j <= high) {
    if (sortingArray[i] <= sortingArray[j]) {
      timeLine.push([k, i, sortingArray[i]]);
      tempArray[k++] = sortingArray[i++];
    } else {
      timeLine.push([k, j, sortingArray[j]]);
      tempArray[k++] = sortingArray[j++];
    }
  }

  while (i <= mid) {
    timeLine.push([k, i, sortingArray[i]]);
    tempArray[k++] = sortingArray[i++];
  }

  while (j <= high) {
    timeLine.push([k, j, sortingArray[j]]);
    tempArray[k++] = sortingArray[j++];
  }

  for (let i = low; i < k; i++) {
    sortingArray[i] = tempArray[i];
  }
}
