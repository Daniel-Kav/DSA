function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
  
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
  const sortedArray = mergeSort([2, 4, 3, 1, 8]);
  console.log(sortedArray); /// Output: [1, 2, 3, 4, 8]
  