const Array = [10,30,15,1000];
const number = 16;

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
