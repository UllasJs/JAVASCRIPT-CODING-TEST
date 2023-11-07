const ArrayofStrings = ["ball", "apple", "cat", "elen", "dog"];

function sortArray(result) {
  var temp = "";

  for (let i = 0; i <= result.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (result[i] < result[j]) {
        temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  console.log(result);
}

sortArray(ArrayofStrings)
