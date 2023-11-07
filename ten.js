const Array = [1, 20, 23, 5, 15, 100];
const number = 15;

function greaterthan() {
  let sum = 0;
  for (i in Array) {
    if (Array[i] > number) {
      sum += Array[i];
    }
  }
  console.log("Sum: " + sum);
}

greaterthan(Array, number);
