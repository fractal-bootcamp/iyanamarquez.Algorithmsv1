const quicksort = (array: number[]) => {
  let arr = [...array];

  if (arr.length < 2) {
    return arr;
  }
  let medianIdx = Math.floor(array.length / 2);
  [arr[medianIdx], arr[arr.length - 1]] = [arr[arr.length - 1], arr[medianIdx]];
  let FRidx = arr.length - 2;
  let FLidx = 0;
  let pivot = arr[arr.length - 1];

  while (FLidx <= FRidx) {
    // IF left side is < pivot, continue left side ->
    if (arr[FLidx] < pivot) {
      FLidx++;
    }
    // if left side is greater, move right side until there is a smaller number <--
    else {
      if (arr[FRidx] < pivot) {
        [arr[FLidx], arr[FRidx]] = [arr[FRidx], arr[FLidx]];
        FLidx++;
        // do a swap
        // start from left side again fr ++
      } else {
        FRidx--;
      }
    }
  }
  //   swap pivot and fl
  [arr[FLidx], arr[arr.length - 1]] = [arr[arr.length - 1], arr[FLidx]];

  //   // Recursively sort the left and right partitions
  let leftPart = quicksort(arr.slice(0, FLidx));
  let rightPart = quicksort(arr.slice(FLidx + 1));

  return [...leftPart, arr[FLidx], ...rightPart];
};

let testArr = [2, 1, 78, 3, 2, 1, 86, 3, 5, 7, 0, 1, 4, 5, 7, 0, 1, 4];

console.log(quicksort(testArr));