function removeDuplicateNumber(array, resultOfArray) {
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < resultOfArray.length; j++) {
      if (array[i] === resultOfArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      resultOfArray[resultOfArray.length] = array[i];
    }
  }
  return resultOfArray;
}

let resultOfArray = [];
let array = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
removeDuplicateNumber(array, resultOfArray);
