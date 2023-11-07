const min = 1;
const max = 10;

function fun() {
  var array = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  console.log(array);
}

fun(min, max);
