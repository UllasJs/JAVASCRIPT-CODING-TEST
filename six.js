const array = ["low", "middle", "high", "Element"];

function ArrayLarge() {
  var large = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i].length < array[j].length) {
        large = array[i];
        array[i] = array[j];
        array[j] = large;
      }
    }
  }

  console.log(array[array.length - 1]);
}

ArrayLarge(array);
