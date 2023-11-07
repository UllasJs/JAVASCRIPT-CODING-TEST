const ArrayofStrings = ["ball", "apple", "cat", "elen", "dog"];

function sortArray() {
  var temp = "";

  for (let i = 0; i <= ArrayofStrings.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (ArrayofStrings[i] < ArrayofStrings[j]) {
        temp = ArrayofStrings[i];
        ArrayofStrings[i] = ArrayofStrings[j];
        ArrayofStrings[j] = temp;
      }
    }
  }
  console.log(ArrayofStrings);
}

sortArray(ArrayofStrings)
