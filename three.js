const a = 1283019238;

function digitsArray() {
  var digits = [];
  digits = a.toString().split("");

  console.log(digits);
}

digitsArray(a);