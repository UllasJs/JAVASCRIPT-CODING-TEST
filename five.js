const a = 1;
const b = 10;

function fun(min, max) {
  var array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  console.log(array);
}

fun(min, max);
