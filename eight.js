const firstobj = {
  name: "ullas",
  a: "1",
  b: "2",
  d: 2,
  e: "",
};
const secondobj = {
  a: 123,
  b: 12,
  c: "d",
  e: "G",
};

function propertycheck(one, two) {
  const merger = {...one,...two}
  for (const keyone in one) {
    merger[keyone] = one[keyone]
  }
  for (const key in two) {
    if (one.hasOwnProperty(key) == two.hasOwnProperty(key)) {
      let newkey = key + '1';
      merger[newkey] = two[key];
    }
  }

  // const merged = Object.assign({}, one, two);
  return merger;
}

const result = propertycheck(firstobj, secondobj);
console.log(result);
